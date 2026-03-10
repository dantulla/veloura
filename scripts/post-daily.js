// ============================================================
// VELOURA — DAILY PRODUCT POSTER
// Runs via GitHub Actions every day at 8:00 AM UTC
// Reads today's products from the schedule and posts to Firebase
// ============================================================

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const schedule = require('./products-schedule');

// ── Firebase Init ──────────────────────────────────────────
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

initializeApp({ credential: cert(serviceAccount) });

const db = getFirestore();

// ── Helpers ────────────────────────────────────────────────

function todayDayIndex() {
  // Cycles through schedule days infinitely
  // Day 0 = launch date (2026-03-10), increments daily
  const launch = new Date('2026-03-10T00:00:00Z');
  const now = new Date();
  const diffDays = Math.floor((now - launch) / (1000 * 60 * 60 * 24));
  return diffDays % schedule.length;
}

function buildAmazonUrl(asin, tag) {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// ── Main ───────────────────────────────────────────────────

async function postDailyProducts() {
  const dayIndex = todayDayIndex();
  const todaysProducts = schedule[dayIndex];
  const today = new Date().toISOString().split('T')[0];

  console.log(`\n🌹 VELOURA Daily Poster`);
  console.log(`📅 Date: ${today}`);
  console.log(`📦 Schedule Day: ${dayIndex + 1} of ${schedule.length}`);
  console.log(`🛍  Products to post: ${todaysProducts.length}\n`);

  // Check if we already posted today (prevent duplicate runs)
  const todayCheck = await db
    .collection('vl_products')
    .where('scheduledDate', '==', today)
    .limit(1)
    .get();

  if (!todayCheck.empty) {
    console.log(`⚠️  Products already posted for ${today}. Skipping.`);
    process.exit(0);
  }

  // Post each product
  let successCount = 0;
  let failCount = 0;

  for (const product of todaysProducts) {
    try {
      const docId = generateId();
      const amazonUrl = buildAmazonUrl(product.asin, 'rpamazon0db-20');

      await db.collection('vl_products').doc(docId).set({
        id:           docId,
        name:         product.name,
        description:  product.description,
        price:        product.price,
        category:     product.category,
        stars:        parseFloat(product.stars),
        badge:        product.badge || '',
        image:        product.image || '',
        asin:         product.asin,
        affiliateUrl: amazonUrl,
        scheduledDate: today,
        dayIndex:     dayIndex + 1,
        createdAt:    Timestamp.now(),
        clicks:       0,
        active:       true
      });

      console.log(`✅ Posted: ${product.name}`);
      successCount++;

      // Small delay between writes to avoid Firestore rate limits
      await new Promise(r => setTimeout(r, 200));

    } catch (err) {
      console.error(`❌ Failed: ${product.name} — ${err.message}`);
      failCount++;
    }
  }

  console.log(`\n── SUMMARY ──────────────────────────`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failed:  ${failCount}`);
  console.log(`📅 Date:    ${today}`);
  console.log(`🗓  Next day: Day ${((dayIndex + 1) % schedule.length) + 1} of ${schedule.length}`);
  console.log(`─────────────────────────────────────\n`);

  if (failCount > 0) {
    process.exit(1); // Causes GitHub Actions to flag the run as failed
  }

  process.exit(0);
}

postDailyProducts().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
