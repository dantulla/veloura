// ============================================================
// VELOURA — DAILY PRODUCT SCHEDULE
// Each day has 15 products. Script cycles through days 1–N
// then repeats from day 1. Add more days as needed.
// Amazon Tag: rpamazon0db-20
// ============================================================

const TAG = 'rpamazon0db-20';
const amazonLink = (asin) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

const schedule = [

  // ============================================================
  // DAY 1
  // ============================================================
  [
    {
      name: 'TruSkin Vitamin C Serum',
      description: 'Dull skin is not your skin type — it is dead cells blocking your glow. TruSkin Vitamin C Serum combines Vitamin C, hyaluronic acid, and retinol to resurface, brighten, and protect. Customers report visibly brighter skin within 2 weeks.',
      price: '$20',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B01M0FMHJI',
      stars: '4.5',
      badge: 'Best Seller',
      image: 'https://m.media-amazon.com/images/I/71YkBBFXJeL._SL1500_.jpg'
    },
    {
      name: 'Vital Proteins Collagen Peptides',
      description: 'After 25 your body produces 1% less collagen every year. One scoop dissolved in your morning coffee replaces what your body stopped making. Customers report plumper skin at week 4 and thicker hair by week 8.',
      price: '$43',
      category: 'Glow Up From the Inside Out',
      asin: 'B00K6JNRTE',
      stars: '5',
      badge: 'Top Rated',
      image: 'https://m.media-amazon.com/images/I/51qm3DJGJiL._SL1500_.jpg'
    },
    {
      name: 'YSL Black Opium Eau de Parfum',
      description: 'A bold blend of black coffee, vanilla, and white flowers that commands attention in any room. Long-lasting, seductive, and instantly recognisable. The scent people stop and ask about.',
      price: '$104',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B00IGGR38S',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/61z5cX-IRML._SL1500_.jpg'
    },
    {
      name: 'THIS WORKS Deep Sleep Pillow Spray',
      description: 'A clinical blend of lavender, vetivert, and wild chamomile proven to trigger sleep onset in under 10 minutes. Two spritzes on your pillow. That is the entire routine. Your skin repairs itself during deep sleep.',
      price: '$29',
      category: 'Night Routine — Sleep & Skin Repair',
      asin: 'B002B0U67W',
      stars: '4.5',
      badge: 'Editor Pick',
      image: 'https://m.media-amazon.com/images/I/51T3y9zEZYL._SL1200_.jpg'
    },
    {
      name: 'LANEIGE Lip Sleeping Mask',
      description: 'Your lips have no oil glands — they cannot moisturise themselves. LANEIGE Lip Sleeping Mask repairs and plumps overnight with murumuru butter and a berry antioxidant complex. Visible results from the first morning.',
      price: '$24',
      category: 'Amazon Beauty Finds Under $30',
      asin: 'B01LXF534B',
      stars: '5',
      badge: 'Viral Pick',
      image: 'https://m.media-amazon.com/images/I/71Rv+7UTuFL._SL1500_.jpg'
    },
    {
      name: 'Mielle Rosemary Mint Scalp Oil',
      description: 'Biotin-enriched rosemary extract stimulates blood flow to dormant follicles. The same ingredient proven in clinical trials to match minoxidil results. Apply, massage 5 minutes, leave in. Visible regrowth at 60 days.',
      price: '$10',
      category: 'Hair Care That Delivers Results',
      asin: 'B07C7H7G7G',
      stars: '4.5',
      badge: 'Best Seller',
      image: 'https://m.media-amazon.com/images/I/61xkHCRKB5L._SL1500_.jpg'
    },
    {
      name: 'ZIMASILK Mulberry Silk Pillowcase',
      description: 'Cotton creates friction that breaks hair, imprints creases into skin, and absorbs your night cream. Silk eliminates all three from the very first night. The one swap dermatologists recommend before anything else.',
      price: '$35',
      category: 'Night Routine — Sleep & Skin Repair',
      asin: 'B07CNMJ4LR',
      stars: '4.5',
      badge: 'Editor Pick',
      image: 'https://m.media-amazon.com/images/I/71rqFT+OQXL._SL1500_.jpg'
    },
    {
      name: 'Jade Roller & Gua Sha Set',
      description: 'Stimulates lymph drainage, reduces under-eye swelling, and sculpts the jawline with two minutes of gentle rolling after moisturiser. Consistent use over 30 days visibly defines cheekbones and lifts the jaw.',
      price: '$15',
      category: 'Morning Routine Products Worth It',
      asin: 'B07WLG1YB2',
      stars: '4.5',
      badge: 'Amazon Find',
      image: 'https://m.media-amazon.com/images/I/71gWC+1BKWL._SL1500_.jpg'
    },
    {
      name: 'Elemis Paddle Body Brush',
      description: 'Uses firm natural bristles to clear dead skin buildup, stimulate circulation, and prep skin for maximum product absorption in three minutes before your shower. The smoothness is immediate from day one.',
      price: '$22',
      category: 'Wellness Habits That Transform You',
      asin: 'B000URGBUG',
      stars: '4.5',
      badge: 'Wellness Pick',
      image: 'https://m.media-amazon.com/images/I/71BKRKM5VqL._SL1500_.jpg'
    },
    {
      name: 'Tatcha Dewy Skin Cream',
      description: 'Japanese Hadasei-3 complex — fermented rice, green tea, and algae — penetrates and holds moisture at a cellular level for a full 24 hours. That lit-from-within dewy glow that no highlighter can fake.',
      price: '$68',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B078XRG74Y',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/518Z+TVYTOL._SL1200_.jpg'
    },
    {
      name: 'SK-II Facial Treatment Essence',
      description: 'Contains over 90% Pitera, a yeast-derived bioferment that accelerates skin cell renewal. The foundation of glass skin. Applied after cleansing before everything else. 40 years behind the best skin in Japan.',
      price: '$99',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B001F0CFKM',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/41VaEoM6CrL._SL1200_.jpg'
    },
    {
      name: 'Viktor & Rolf Flowerbomb Perfume',
      description: 'Opens with sambac jasmine and centifolia rose, deepens into warm patchouli and amber. Lasts on skin for hours and on clothing for days. Top 10 women fragrance bestseller for two decades without interruption.',
      price: '$112',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B0015YWBM4',
      stars: '5',
      badge: 'Cult Classic',
      image: 'https://m.media-amazon.com/images/I/51XWxKyMKXL._SL1200_.jpg'
    },
    {
      name: 'Vitafusion Women\'s Multivitamin Gummies',
      description: '15 essential vitamins and minerals including D3, B12, and biotin in two gummies per day. No pills, no aftertaste. The lowest-effort high-return wellness habit in your morning routine.',
      price: '$18',
      category: 'Wellness Habits That Transform You',
      asin: 'B001GCU6KA',
      stars: '4.5',
      badge: 'Daily Essential',
      image: 'https://m.media-amazon.com/images/I/81kFpy2UZML._SL1500_.jpg'
    },
    {
      name: 'Narciso Rodriguez For Her EDP',
      description: 'A skin-like musky floral that smells like the best version of you — warm, clean, effortlessly intimate. One of the most-complimented fragrances in the designer category. Subtle enough for day, sensual enough for night.',
      price: '$89',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B0000530GN',
      stars: '4.5',
      badge: 'Signature Scent',
      image: 'https://m.media-amazon.com/images/I/41j7NBxNI7L._SL1200_.jpg'
    },
    {
      name: 'Hydro Flask 32oz Wide Mouth',
      description: 'No serum can compensate for chronic dehydration. Hydro Flask keeps water cold for 24 hours — the only reason most people fail to hit their intake. Two full bottles per day minimum. Your skin looks different in 14 days.',
      price: '$45',
      category: 'Wellness Habits That Transform You',
      asin: 'B01ACNZK42',
      stars: '5',
      badge: 'Wellness Essential',
      image: 'https://m.media-amazon.com/images/I/41qkjREqiIL._SL1200_.jpg'
    }
  ],

  // ============================================================
  // DAY 2
  // ============================================================
  [
    {
      name: 'CeraVe Moisturising Cream',
      description: 'Three essential ceramides and hyaluronic acid restore the skin barrier that harsh cleansers, weather, and aging break down daily. Fragrance-free, non-comedogenic, dermatologist-developed. The foundation every routine needs.',
      price: '$20',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B00TTD9BRC',
      stars: '5',
      badge: 'Dermatologist Pick',
      image: 'https://m.media-amazon.com/images/I/61S5Yl8h1OL._SL1500_.jpg'
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      description: 'Hyaluronic acid pulls and locks moisture into skin cells for 72 continuous hours. Weightless, oil-free, and visibly plumping from the first use. The fix for dehydrated skin that no regular moisturiser can solve.',
      price: '$20',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B00NR1YQK4',
      stars: '4.5',
      badge: 'Best Seller',
      image: 'https://m.media-amazon.com/images/I/51GxrCEaqpL._SL1500_.jpg'
    },
    {
      name: 'Olaplex No. 3 Hair Perfector',
      description: 'Reconnects broken disulfide bonds from the inside out — the same treatment every professional colorist uses in the salon. Apply once a week before shampoo. Customers report visibly stronger hair within three uses.',
      price: '$30',
      category: 'Hair Care That Delivers Results',
      asin: 'B00SNM5US4',
      stars: '5',
      badge: 'Salon Proven',
      image: 'https://m.media-amazon.com/images/I/51oU5GXBJ3L._SL1500_.jpg'
    },
    {
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      description: 'Visibly reduces pore appearance, controls excess sebum, fades post-blemish marks, and evens skin tone simultaneously. At $7 it outlasts and outperforms treatments at fifteen times the price. Results in 14 days.',
      price: '$7',
      category: 'Amazon Beauty Finds Under $30',
      asin: 'B07QF1Z5S5',
      stars: '4.5',
      badge: 'Viral Pick',
      image: 'https://m.media-amazon.com/images/I/51xRsxDaqbL._SL1500_.jpg'
    },
    {
      name: 'Drunk Elephant T.L.C. Framboos Glycolic Night Serum',
      description: 'AHA and BHA acids dissolve dead skin buildup, fade hyperpigmentation, and smooth texture while you sleep. Applied every other night, customers report visibly brighter, smoother, more even skin within two weeks.',
      price: '$90',
      category: 'Night Routine — Sleep & Skin Repair',
      asin: 'B00PGT5CRO',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/51sTbcOgJOL._SL1500_.jpg'
    },
    {
      name: 'Moon Juice SuperHair Daily Nutrition',
      description: 'Biotin, silica, and adaptogenic herbs including ashwagandha lower cortisol at the follicle level while nourishing hair growth from within. Reduced shedding at 30 days. New growth visible at 60.',
      price: '$40',
      category: 'Wellness Habits That Transform You',
      asin: 'B07MHNKZL2',
      stars: '4.5',
      badge: 'Wellness Pick',
      image: 'https://m.media-amazon.com/images/I/51R8QC6aFLL._SL1200_.jpg'
    },
    {
      name: 'Mugler Alien Goddess Eau de Parfum',
      description: 'Luminous solar floral of bergamot and sambac jasmine over warm vanilla and cashmeran. Projects without overwhelming and lasts without fading. One of the fastest-growing prestige fragrances since launch.',
      price: '$115',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B088W8RJNK',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/51s9MSGE1aL._SL1200_.jpg'
    },
    {
      name: "Nature's Bounty Biotin 5000mcg Gummies",
      description: 'A clinical dose of biotin in two strawberry gummies per day. Customers consistently report nail improvement at three weeks and hair thickness improvement at six. The lowest-effort glow-up habit available.',
      price: '$15',
      category: 'Glow Up From the Inside Out',
      asin: 'B00NQXBY7K',
      stars: '4.5',
      badge: 'Daily Essential',
      image: 'https://m.media-amazon.com/images/I/81+3eQMtlgL._SL1500_.jpg'
    },
    {
      name: 'Cetaphil Gentle Skin Cleanser',
      description: 'Removes dirt, makeup, and impurities without disrupting the pH or stripping the skin barrier — leaving your skin ready to actually absorb what comes next. Dermatologist-recommended globally for 70 years.',
      price: '$14',
      category: 'Morning Routine Products Worth It',
      asin: 'B001ET7GBI',
      stars: '5',
      badge: 'Dermatologist Pick',
      image: 'https://m.media-amazon.com/images/I/61TxA0Ja9iL._SL1500_.jpg'
    },
    {
      name: 'Slip Pure Silk Sleep Mask',
      description: 'Blocks 100% of light while mulberry silk prevents friction and absorption — protecting both your skin and the eye cream underneath. The upgrade your sleep routine is missing for deeper sleep and better skin.',
      price: '$50',
      category: 'Night Routine — Sleep & Skin Repair',
      asin: 'B004IJKOKQ',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/61WqbgqVlxL._SL1200_.jpg'
    },
    {
      name: 'Mighty Patch Original Acne Patches',
      description: 'Hydrocolloid technology draws out pus and sebum from the surface overnight without damaging skin. Apply before bed. By morning the patch turns white — extracted without touching the blemish. 36 patches per pack.',
      price: '$13',
      category: 'Amazon Beauty Finds Under $30',
      asin: 'B074PVTPBW',
      stars: '5',
      badge: 'Viral Pick',
      image: 'https://m.media-amazon.com/images/I/71BJPXKJBFL._SL1500_.jpg'
    },
    {
      name: 'Mugler Angel Eau de Parfum',
      description: 'The original oriental floral that defined an era of fragrance. Patchouli, vanilla, and praline with a cool celestial freshness that makes it completely unlike anything else. Launched in 1992 and never left the bestseller list.',
      price: '$99',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B000Y3MGUK',
      stars: '5',
      badge: 'Cult Classic',
      image: 'https://m.media-amazon.com/images/I/61oG4THQMOL._SL1200_.jpg'
    },
    {
      name: 'Lancôme Idôle Eau de Parfum',
      description: 'A luminous floral built around 10,000 rose petals and white musks — fresh, effortless, and entirely modern. The fragrance for women who do not want to smell like everyone else in the room. Clean and confident.',
      price: '$85',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B07XJL33CX',
      stars: '4.5',
      badge: 'Editor Pick',
      image: 'https://m.media-amazon.com/images/I/51DLo9TVKBL._SL1200_.jpg'
    },
    {
      name: 'Vitamin E Oil by Jason',
      description: 'Pure vitamin E oil visibly reduces the appearance of scars, stretch marks, and fine lines when applied nightly to targeted areas. An overnight treatment that costs $10 and delivers results comparable to clinical treatments.',
      price: '$10',
      category: 'Amazon Beauty Finds Under $30',
      asin: 'B00014D6EE',
      stars: '4.5',
      badge: 'Amazon Find',
      image: 'https://m.media-amazon.com/images/I/71K0FDSVMCL._SL1500_.jpg'
    },
    {
      name: 'Honest Beauty Vitamin C Radiance Serum',
      description: 'Applied under SPF every morning, Vitamin C reverses existing damage — fading dark spots, evening skin tone, and stimulating collagen. The step before SPF nobody tells you about until you are already behind.',
      price: '$25',
      category: 'Morning Routine Products Worth It',
      asin: 'B07WHGJKC6',
      stars: '4.5',
      badge: 'Morning Essential',
      image: 'https://m.media-amazon.com/images/I/51m3gzQ7mPL._SL1500_.jpg'
    }
  ],

  // ============================================================
  // DAY 3
  // ============================================================
  [
    {
      name: 'Paula\'s Choice 2% BHA Liquid Exfoliant',
      description: 'Unclogs and minimises pores, smooths wrinkles, and clears blackheads with one swipe of salicylic acid. Apply after cleansing, before moisturiser. The exfoliant recommended by dermatologists, facialists, and every beauty editor.',
      price: '$35',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B00949CTQQ',
      stars: '5',
      badge: 'Editor Pick',
      image: 'https://m.media-amazon.com/images/I/41E4qFLHFqL._SL1200_.jpg'
    },
    {
      name: 'Malin + Goetz Bergamot Hand + Body Wash',
      description: 'Luxury body wash that transforms your shower into a spa ritual. Bergamot and citrus create an instantly mood-lifting sensory experience while gentle cleansers leave skin soft without stripping moisture.',
      price: '$28',
      category: 'Morning Routine Products Worth It',
      asin: 'B003BPUHO8',
      stars: '4.5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/41MFQ-YXVML.jpg'
    },
    {
      name: 'Chloe Eau de Parfum',
      description: 'Rose, peony, and magnolia over warm cedarwood and amber — the fragrance that defines effortless feminine luxury. Clean, sophisticated, and works as well in the boardroom as it does on a date.',
      price: '$99',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B001TXQYXO',
      stars: '5',
      badge: 'Signature Scent',
      image: 'https://m.media-amazon.com/images/I/61bvV6mH4uL._SL1200_.jpg'
    },
    {
      name: 'Briogeo Scalp Revival Charcoal + Coconut Oil Micro-Exfoliating Shampoo',
      description: 'Charcoal and binchotan clarify product buildup and sebum from the scalp while coconut oil nourishes and balances. Use once a week before your regular shampoo. Customers report less oiliness and faster hair growth within a month.',
      price: '$42',
      category: 'Hair Care That Delivers Results',
      asin: 'B01N3AU3UM',
      stars: '4.5',
      badge: 'Scalp Treatment',
      image: 'https://m.media-amazon.com/images/I/61O6dBz7V0L._SL1500_.jpg'
    },
    {
      name: 'Kiehl\'s Ultra Facial Cream SPF 30',
      description: 'Award-winning moisturiser with built-in SPF 30. Imperialine from glacier proteins maintains moisture levels for 24 hours while the broad-spectrum SPF prevents 95% of daily UV-driven collagen breakdown. Two steps in one.',
      price: '$39',
      category: 'Morning Routine Products Worth It',
      asin: 'B004D2BHFC',
      stars: '5',
      badge: 'Morning Essential',
      image: 'https://m.media-amazon.com/images/I/51UuIPW2i1L._SL1200_.jpg'
    },
    {
      name: 'SheaMoisture Manuka Honey & Mafura Oil Hair Masque',
      description: 'Manuka honey draws moisture into the hair shaft while mafura oil seals it in — reversing the brittleness and breakage caused by heat, colour, and daily styling. Leave on for 5 minutes. The difference is immediate.',
      price: '$14',
      category: 'Hair Care That Delivers Results',
      asin: 'B07K3B85DX',
      stars: '4.5',
      badge: 'Amazon Find',
      image: 'https://m.media-amazon.com/images/I/81k0Yr5GqML._SL1500_.jpg'
    },
    {
      name: 'Lancome La Vie Est Belle Perfume',
      description: 'The gourmand floral that has been one of the world top-selling fragrances for over a decade. Iris, patchouli, praline, and vanilla in a warm, joyful composition that wears close to the skin and never becomes too much.',
      price: '$92',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B009SGAIEM',
      stars: '5',
      badge: 'Best Seller',
      image: 'https://m.media-amazon.com/images/I/51hIBgSwCVL._SL1200_.jpg'
    },
    {
      name: 'Herbivore Botanicals Pink Cloud Rosewater Moisture Cream',
      description: 'Tremella mushroom holds 500 times its weight in water. Rosewater calms redness and irritation. This lightweight cloud cream is the answer for sensitive or reactive skin that cannot tolerate heavier formulas.',
      price: '$48',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B07CQ3CWL1',
      stars: '4.5',
      badge: 'Clean Beauty',
      image: 'https://m.media-amazon.com/images/I/61z1HNSYBQL._SL1500_.jpg'
    },
    {
      name: 'NeoCell Super Collagen Powder',
      description: 'Type 1 and 3 collagen — the specific types that support skin elasticity, hair strength, and nail integrity. 6,600mg per serving dissolved in any liquid. The supplement that works at the structural level of your beauty.',
      price: '$25',
      category: 'Glow Up From the Inside Out',
      asin: 'B001GV9ZIM',
      stars: '4.5',
      badge: 'Daily Essential',
      image: 'https://m.media-amazon.com/images/I/71bH6L2FKOL._SL1500_.jpg'
    },
    {
      name: 'Gisou Honey Infused Hair Oil',
      description: 'Mirsalehi honey naturally repairs the hair cuticle, adds mirror-like shine, and tames frizz without heaviness. Apply to damp hair before styling or to dry hair for instant gloss. The finishing step that makes hair look salon-fresh.',
      price: '$49',
      category: 'Hair Care That Delivers Results',
      asin: 'B07CGLH6ZS',
      stars: '5',
      badge: 'Viral Pick',
      image: 'https://m.media-amazon.com/images/I/61aTiS7HJBL._SL1500_.jpg'
    },
    {
      name: 'Elizabeth Arden Eight Hour Cream',
      description: 'The original multi-purpose balm that has been in production since 1930. Hydrates, heals, and protects lips, cuticles, dry patches, and irritated skin. One product that replaces five. A permanent place on every vanity.',
      price: '$22',
      category: 'Amazon Beauty Finds Under $30',
      asin: 'B0009RF9FO',
      stars: '5',
      badge: 'Classic Pick',
      image: 'https://m.media-amazon.com/images/I/61y6OoUPw+L._SL1500_.jpg'
    },
    {
      name: 'Versace Bright Crystal Eau de Toilette',
      description: 'Pomegranate, yuzu, and lotus blossoms over amber and musk — fresh, clean, and undeniably feminine. Light enough for daily wear, distinctive enough to be a signature. One of the best value luxury fragrances available.',
      price: '$65',
      category: 'Perfumes That Make You Unforgettable',
      asin: 'B000I2BKIC',
      stars: '4.5',
      badge: 'Everyday Luxury',
      image: 'https://m.media-amazon.com/images/I/61RUHOM9XRL._SL1200_.jpg'
    },
    {
      name: 'Sunday Riley Good Genes Glycolic Acid Treatment',
      description: 'Glycolic acid exfoliates at the surface level while lactic acid addresses fine lines and dark spots simultaneously. Apply 2–3 nights per week after cleansing. Skin is visibly refined and even in two weeks. The premium night treatment.',
      price: '$85',
      category: 'Night Routine — Sleep & Skin Repair',
      asin: 'B00N7CTMKQ',
      stars: '5',
      badge: 'Luxury Pick',
      image: 'https://m.media-amazon.com/images/I/515CStpIrUL._SL1200_.jpg'
    },
    {
      name: 'Tarte Shape Tape Full Coverage Concealer',
      description: 'Full coverage that does not crease, cake, or fade — even after 12 hours. The concealer that became the most talked-about makeup product of the last decade and still holds the position. Available in 30 shades.',
      price: '$32',
      category: 'Morning Routine Products Worth It',
      asin: 'B01LXH64ZM',
      stars: '4.5',
      badge: 'Best Seller',
      image: 'https://m.media-amazon.com/images/I/71c6G7YJiKL._SL1500_.jpg'
    },
    {
      name: 'RMS Beauty "Un" Cover-Up Cream Foundation',
      description: 'Raw, food-grade coconut oil carries buildable coverage that moves with the skin instead of sitting on top of it. The clean beauty foundation for women who want coverage that actually looks like skin.',
      price: '$44',
      category: 'Luxury Skincare That Actually Works',
      asin: 'B005TFNC2Q',
      stars: '4.5',
      badge: 'Clean Beauty',
      image: 'https://m.media-amazon.com/images/I/61N9KFAXSSL._SL1500_.jpg'
    }
  ]
];

module.exports = schedule;
