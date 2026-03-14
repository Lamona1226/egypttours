import { PrismaClient, TourCategory, BookingStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // ── Clean existing data ──────────────────────────────
  await prisma.testimonial.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.availability.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.tourPackage.deleteMany();
  await prisma.tour.deleteMany();
  console.log('Cleared existing data');

  // ── TOURS ─────────────────────────────────────────────
  const tours = await Promise.all([
    prisma.tour.create({
      data: {
        slug: 'giza-pyramids-tour',
        title: 'Giza Pyramids & Sphinx Tour',
        titleAr: 'جولة أهرامات الجيزة والأبو الهول',
        description: 'Explore the last remaining wonder of the ancient world. Stand before the Great Pyramid of Khufu, marvel at the mysterious Sphinx, and descend into ancient burial chambers with your expert Egyptologist guide.',
        descriptionAr: 'استكشف آخر عجائب العالم القديم الباقية. قف أمام الهرم الأكبر للفرعون خوفو، وتعجب من أبو الهول الغامض.',
        category: TourCategory.HISTORICAL,
        durationHours: 8,
        pricePerPerson: 45,
        maxGroupSize: 12,
        meetingPoint: 'Your hotel in Cairo',
        images: [
          'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800',
          'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
        ],
        includedItems: [
          'Hotel pickup and drop-off',
          'Expert Egyptologist guide',
          'Bottled water',
          'Air-conditioned transport',
        ],
        excludedItems: [
          'Entrance fees ($20 per person)',
          'Meals',
          'Camel ride (optional)',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'luxor-temples-tour',
        title: 'Luxor Temples & Valley of the Kings',
        titleAr: 'معابد الأقصر ووادي الملوك',
        description: 'Journey through 4,000 years of history in a single day. Visit the colossal Karnak Temple complex, the elegant Luxor Temple, and explore the Valley of the Kings where pharaohs were buried for eternity.',
        descriptionAr: 'رحلة عبر 4000 عام من التاريخ في يوم واحد. زر معبد الكرنك الضخم ومعبد الأقصر ووادي الملوك.',
        category: TourCategory.HISTORICAL,
        durationHours: 10,
        pricePerPerson: 65,
        maxGroupSize: 10,
        meetingPoint: 'Your hotel in Luxor',
        images: [
          'https://images.unsplash.com/photo-1562679299-1f8dea4edc60?w=800',
          'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800',
        ],
        includedItems: [
          'Hotel pickup and drop-off',
          'Expert Egyptologist guide',
          'Bottled water',
          'Air-conditioned transport',
          'West Bank transfer',
        ],
        excludedItems: [
          'Entrance fees ($35 per person)',
          'Lunch',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'white-desert-safari',
        title: 'White Desert Overnight Safari',
        titleAr: 'سفاري ليلة كاملة في الصحراء البيضاء',
        description: 'Camp beneath the stars in the surreal White Desert, where ancient wind-sculpted chalk formations glow silver in the moonlight. One of Egypt\'s most extraordinary and unforgettable experiences.',
        descriptionAr: 'خيّم تحت النجوم في الصحراء البيضاء السريالية، حيث تتوهج تكوينات الطباشير المنحوتة بالرياح باللون الفضي في ضوء القمر.',
        category: TourCategory.DESERT,
        durationHours: 24,
        pricePerPerson: 120,
        maxGroupSize: 8,
        meetingPoint: 'Cairo pickup at 6:00 AM',
        images: [
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
        ],
        includedItems: [
          'Transport from Cairo and back',
          'Expert desert guide',
          'Camping equipment',
          'All meals (lunch, dinner, breakfast)',
          'Campfire',
          'Bottled water',
        ],
        excludedItems: [
          'Sleeping bag (rental available)',
          'Personal expenses',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'abu-simbel-day-trip',
        title: 'Abu Simbel Temples Day Trip',
        titleAr: 'رحلة يوم إلى معابد أبو سمبل',
        description: 'Witness Ramesses II\'s greatest architectural achievement — two massive rock temples carved directly into the mountainside 3,200 years ago. The sheer scale and artistry will leave you speechless.',
        descriptionAr: 'شاهد أعظم إنجاز معماري للفرعون رمسيس الثاني، معبدان ضخمان منحوتان في الجبل قبل 3200 عام.',
        category: TourCategory.HISTORICAL,
        durationHours: 12,
        pricePerPerson: 85,
        maxGroupSize: 12,
        meetingPoint: 'Your hotel in Aswan',
        images: [
          'https://images.unsplash.com/photo-1568750895079-e4b35b7bef78?w=800',
        ],
        includedItems: [
          'Hotel pickup and drop-off',
          'Expert Egyptologist guide',
          'Air-conditioned transport',
          'Bottled water',
        ],
        excludedItems: [
          'Entrance fees ($20 per person)',
          'Meals',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'red-sea-snorkeling',
        title: 'Red Sea Snorkeling & Beach Day',
        titleAr: 'غطس في البحر الأحمر ويوم شاطئ',
        description: 'Discover the kaleidoscopic underwater world of the Red Sea, home to over 1,200 species of fish and 250 species of coral. No experience required — our guides ensure a safe and magical encounter.',
        descriptionAr: 'اكتشف عالم البحر الأحمر تحت الماء المليء بأكثر من 1200 نوع من الأسماك و250 نوعاً من المرجان.',
        category: TourCategory.BEACH,
        durationHours: 8,
        pricePerPerson: 55,
        maxGroupSize: 15,
        meetingPoint: 'Your hotel in Hurghada',
        images: [
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        ],
        includedItems: [
          'Boat trip to reef',
          'Snorkeling equipment',
          'Expert guide',
          'Lunch on board',
          'Bottled water',
        ],
        excludedItems: [
          'Diving certification course',
          'Underwater camera rental',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'cairo-city-tour',
        title: 'Cairo City & Egyptian Museum Tour',
        titleAr: 'جولة القاهرة والمتحف المصري',
        description: 'Immerse yourself in 5,000 years of history in a single day. Marvel at the world\'s greatest collection of ancient artefacts, lose yourself in Islamic Cairo, and bargain for treasures in Khan El Khalili bazaar.',
        descriptionAr: 'انغمس في 5000 عام من التاريخ في يوم واحد. تعجب من أعظم مجموعة من القطع الأثرية القديمة في العالم.',
        category: TourCategory.CULTURAL,
        durationHours: 9,
        pricePerPerson: 40,
        maxGroupSize: 12,
        meetingPoint: 'Your hotel in Cairo',
        images: [
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
        ],
        includedItems: [
          'Hotel pickup and drop-off',
          'Expert Egyptologist guide',
          'Air-conditioned transport',
          'Bottled water',
        ],
        excludedItems: [
          'Egyptian Museum entrance ($20)',
          'Lunch',
          'Shopping',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'aswan-felucca-sunset',
        title: 'Aswan Felucca Sunset Sail',
        titleAr: 'رحلة فلوكة عند غروب الشمس في أسوان',
        description: 'Glide silently through the calm waters of the Nile at sunset on a traditional wooden felucca sailboat. Watch the desert mountains turn orange and purple while sipping mint tea — pure Egyptian magic.',
        descriptionAr: 'انزلق بهدوء عبر مياه النيل الهادئة عند الغروب على متن قارب شراعي خشبي تقليدي.',
        category: TourCategory.NILE_CRUISE,
        durationHours: 3,
        pricePerPerson: 35,
        maxGroupSize: 10,
        meetingPoint: 'Aswan Corniche — Felucca Dock',
        images: [
          'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
        ],
        includedItems: [
          'Private felucca boat',
          'Experienced captain',
          'Mint tea and soft drinks',
          'Blankets for cooler evenings',
        ],
        excludedItems: [
          'Meals',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tour.create({
      data: {
        slug: 'nile-cruise-luxor-aswan',
        title: 'Nile Cruise — Luxor to Aswan',
        titleAr: 'رحلة نيلية من الأقصر إلى أسوان',
        description: 'Drift along the world\'s greatest river on a classic Nile cruise from Luxor to Aswan. Stop at magnificent temples, watch villages drift by from your sun deck, and experience Egypt at a beautifully unhurried pace.',
        descriptionAr: 'تجول على أعظم نهر في العالم في رحلة نيلية كلاسيكية من الأقصر إلى أسوان.',
        category: TourCategory.NILE_CRUISE,
        durationHours: 96,
        pricePerPerson: 299,
        maxGroupSize: 20,
        meetingPoint: 'Luxor Cruise Terminal',
        images: [
          'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
        ],
        includedItems: [
          'All meals on board (full board)',
          'Expert Egyptologist guide',
          'Entrance fees to all temples',
          'Transfers to and from the boat',
          'Evening entertainment',
          'Cabin accommodation',
        ],
        excludedItems: [
          'International flights',
          'Travel insurance',
          'Personal expenses',
          'Gratuities',
        ],
        isActive: true,
      },
    }),
  ]);

  console.log(`Created ${tours.length} tours`);

  // ── PACKAGES ──────────────────────────────────────────
  const packages = await Promise.all([
    prisma.tourPackage.create({
      data: {
        slug: 'egypt-essentials-7-days',
        title: 'Egypt Essentials — 7 Days',
        titleAr: 'أساسيات مصر — 7 أيام',
        description: 'The perfect first Egypt trip. Experience Cairo, Luxor, and Aswan with expert guides, comfortable hotels, and all transfers arranged for you. The most popular Egypt itinerary for a reason.',
        descriptionAr: 'الرحلة المثالية لأول زيارة لمصر. استكشف القاهرة والأقصر وأسوان مع مرشدين خبراء وفنادق مريحة.',
        durationDays: 7,
        pricePerPerson: 899,
        maxGroupSize: 12,
        accommodation: '4-star hotels throughout',
        images: [
          'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800',
          'https://images.unsplash.com/photo-1562679299-1f8dea4edc60?w=800',
        ],
        includedItems: [
          '6 nights accommodation (4-star hotels)',
          'Daily breakfast',
          'All transfers and transport',
          'Expert Egyptologist guide throughout',
          'Entrance fees to all listed sites',
          'Airport transfers',
          'Bottled water daily',
        ],
        excludedItems: [
          'International flights',
          'Travel insurance',
          'Lunches and dinners',
          'Personal expenses',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tourPackage.create({
      data: {
        slug: 'nile-to-red-sea-10-days',
        title: 'Nile to Red Sea — 10 Days',
        titleAr: 'من النيل إلى البحر الأحمر — 10 أيام',
        description: 'The ultimate Egypt combination — ancient history and tropical paradise. Explore Cairo and the pyramids, cruise the Nile, then relax on the Red Sea coast with world-class snorkeling.',
        descriptionAr: 'أفضل مزيج لمصر — تاريخ عريق وجنة استوائية. استكشف القاهرة والأهرامات والنيل والبحر الأحمر.',
        durationDays: 10,
        pricePerPerson: 1299,
        maxGroupSize: 10,
        accommodation: '4-star hotels and Nile cruise cabin',
        images: [
          'https://images.unsplash.com/photo-1562679299-1f8dea4edc60?w=800',
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        ],
        includedItems: [
          '9 nights accommodation (hotels + cruise cabin)',
          'Full board on Nile cruise',
          'Breakfast at all hotels',
          'All transfers and transport',
          'Expert Egyptologist guide',
          'All entrance fees',
          'Snorkeling equipment',
          'Red Sea boat trip',
        ],
        excludedItems: [
          'International flights',
          'Travel insurance',
          'Personal expenses',
          'Gratuities',
        ],
        isActive: true,
      },
    }),

    prisma.tourPackage.create({
      data: {
        slug: 'grand-egypt-14-days',
        title: 'Grand Egypt — 14 Days',
        titleAr: 'مصر الكبرى — 14 يوم',
        description: 'The complete Egypt experience — from Alexandria on the Mediterranean to Abu Simbel on the Sudanese border, including the White Desert, a Nile cruise, and the Red Sea. Egypt in full.',
        descriptionAr: 'التجربة المصرية الكاملة من الإسكندرية على البحر المتوسط إلى أبو سمبل على الحدود السودانية.',
        durationDays: 14,
        pricePerPerson: 1899,
        maxGroupSize: 8,
        accommodation: '5-star hotels and premium Nile cruise suite',
        images: [
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
          'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800',
        ],
        includedItems: [
          '13 nights 5-star accommodation',
          'All meals throughout',
          'Private Egyptologist guide for all 14 days',
          'All entrance fees',
          'Internal flights (Cairo-Luxor, Aswan-Hurghada)',
          'Premium Nile cruise cabin',
          'White Desert camping',
          'Snorkeling equipment',
          'Airport transfers',
        ],
        excludedItems: [
          'International flights',
          'Travel insurance',
          'Personal expenses',
          'Gratuities',
        ],
        isActive: true,
      },
    }),
  ]);

  console.log(`Created ${packages.length} packages`);

  // ── TESTIMONIALS ──────────────────────────────────────
  const testimonials = await Promise.all([
    prisma.testimonial.create({
      data: {
        authorName: 'Sarah Mitchell',
        country: 'United Kingdom',
        rating: 5,
        text: 'Absolutely breathtaking. Our guide Ahmed knew every hieroglyph and every story. The pyramids at sunset were something I will never forget as long as I live. Worth every penny.',
        approved: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        authorName: 'Hans Weber',
        country: 'Germany',
        rating: 5,
        text: 'Perfect organisation from start to finish. The Nile cruise boat was beautiful, the food was excellent, and the temples along the way were incredible. Egypt Tour and Adventure made everything seamless.',
        approved: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        authorName: 'Marie Dupont',
        country: 'France',
        rating: 5,
        text: 'Our Egyptologist guide was the best tour guide I have ever had anywhere in the world. She brought the Valley of the Kings to life in a way no guidebook ever could. Magnifique!',
        approved: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        authorName: 'Ahmed Al-Rashidi',
        country: 'Saudi Arabia',
        rating: 5,
        text: 'The White Desert overnight was the highlight of our entire trip to Egypt. Camping under the stars surrounded by those incredible chalk formations — pure magic. Highly recommended.',
        approved: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        authorName: 'Jennifer Chen',
        country: 'United States',
        rating: 5,
        text: 'I was nervous about visiting Egypt as a solo female traveler but the team made me feel completely safe and looked after the entire time. The Egyptian Museum alone was worth the whole trip!',
        approved: true,
      },
    }),
    prisma.testimonial.create({
      data: {
        authorName: 'Piotr Kowalski',
        country: 'Poland',
        rating: 4,
        text: 'Great snorkeling trip — the coral reefs were stunning and the fish were incredible. Everything was very well organised and the guide was excellent. Will definitely book again.',
        approved: true,
      },
    }),
  ]);

  console.log(`Created ${testimonials.length} testimonials`);

  // ── BLOG POSTS ────────────────────────────────────────
  const posts = await Promise.all([
    prisma.blogPost.create({
      data: {
        slug: 'best-time-visit-egypt',
        title: 'Best Time to Visit Egypt — Month by Month Guide',
        titleAr: 'أفضل وقت لزيارة مصر — دليل شهري',
        content: `Egypt is a year-round destination, but the best time to visit depends entirely on what you want to experience and where you plan to go.

**October to April — Peak Season**
This is universally the best time to visit Egypt. Temperatures are pleasant across the country — around 20–25°C in Cairo, slightly warmer in Luxor and Aswan. December and January are the most popular months and see the highest number of international visitors.

**May and September — Shoulder Season**
Temperatures start climbing in May and begin dropping in September. These months offer a good balance of reasonable weather and fewer crowds. Prices are slightly lower than peak season.

**June to August — Summer**
Egypt's summer is hot — very hot. Luxor and Aswan regularly exceed 40°C. However, the Red Sea coast (Hurghada, Sharm El-Sheikh) remains popular year-round thanks to sea breezes and the underwater world being equally spectacular regardless of surface temperature.

**Our Recommendation**
Book between October and March for the most comfortable experience across all regions. If budget is a priority, April and September offer great value with still-manageable temperatures.`,
        contentAr: 'مصر وجهة سياحية طوال العام، لكن أفضل وقت للزيارة يعتمد على ما تريد تجربته وأين تخطط للذهاب.',
        author: 'Egypt Tour Team',
        coverImage: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=1200',
        tags: ['travel tips', 'planning', 'weather', 'egypt'],
        published: true,
        publishedAt: new Date('2024-10-15'),
      },
    }),

    prisma.blogPost.create({
      data: {
        slug: 'giza-pyramids-complete-guide',
        title: "The Complete Visitor's Guide to the Giza Pyramids",
        titleAr: 'الدليل الكامل لزيارة أهرامات الجيزة',
        content: `The Giza Pyramid Complex is the most iconic archaeological site on Earth — and one of the most visited. Here is everything you need to know before you go.

**The Three Great Pyramids**
The complex contains three main pyramids: the Great Pyramid of Khufu (the largest), the Pyramid of Khafre (which appears taller due to its elevated position), and the Pyramid of Menkaure (the smallest of the three). Each took an estimated 20 years to build.

**The Sphinx**
The Great Sphinx of Giza is the world's largest monolithic statue, carved from a single block of limestone. It faces east toward the rising sun. Most Egyptologists believe it represents Pharaoh Khafre.

**Practical Tips**
- Arrive early (gates open at 8:00 AM) to beat the crowds and the heat
- Hire a licensed guide — the difference in experience is immense
- The entrance fee covers the plateau; entering inside the pyramids costs extra
- The Solar Boat Museum next to the Great Pyramid is well worth the extra fee
- Dress comfortably and bring sun protection — there is very little shade`,
        contentAr: 'مجمع أهرامات الجيزة هو أشهر موقع أثري على وجه الأرض وأكثرها زيارة.',
        author: 'Dr. Ahmed Hassan',
        coverImage: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200',
        tags: ['pyramids', 'cairo', 'history', 'guide'],
        published: true,
        publishedAt: new Date('2024-11-02'),
      },
    }),

    prisma.blogPost.create({
      data: {
        slug: 'nile-cruise-vs-land-tour',
        title: "Nile Cruise vs Land Tour — Which is Right for You?",
        titleAr: 'رحلة نيلية أم جولة برية — أيهما يناسبك؟',
        content: `One of the most common questions we receive from travelers planning an Egypt trip is whether to take a Nile cruise or a land-based tour. The honest answer is: it depends on your travel style.

**Choose a Nile Cruise if:**
- You want a relaxed, slow-paced experience
- You enjoy the romance of river travel
- You want to cover Luxor and Aswan without changing hotels
- You are travelling as a couple or on a honeymoon
- You want all meals included and a floating base

**Choose a Land Tour if:**
- You want maximum flexibility and more sites per day
- You prefer staying in city-centre hotels close to attractions
- You are on a tighter budget
- You want to include Cairo and the pyramids in the same itinerary as Luxor
- You prefer more energetic sightseeing days

**Our Verdict**
The ideal Egypt itinerary combines both — spend 2-3 days in Cairo, fly to Luxor, take a 4-night Nile cruise to Aswan, then fly to the Red Sea for a few days of relaxation.`,
        contentAr: 'أحد الأسئلة الأكثر شيوعاً التي نتلقاها من المسافرين الذين يخططون لرحلة إلى مصر.',
        author: 'Egypt Tour Team',
        coverImage: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200',
        tags: ['nile cruise', 'planning', 'advice'],
        published: true,
        publishedAt: new Date('2024-11-20'),
      },
    }),

    prisma.blogPost.create({
      data: {
        slug: 'egypt-visa-guide-2025',
        title: 'Egypt Visa Requirements 2025 — Complete Guide',
        titleAr: 'متطلبات تأشيرة مصر 2025 — دليل كامل',
        content: `Getting your Egypt visa is straightforward for most nationalities. Here is everything you need to know for 2025.

**Option 1: E-Visa (Recommended)**
Apply online at visa2egypt.gov.eg at least 7 days before travel. Cost: $25 USD. You receive a PDF to print and present on arrival. Processing takes 3-5 business days.

**Option 2: Visa on Arrival**
Available at Cairo, Hurghada, and Sharm El-Sheikh airports. Cost: $25 USD cash. Queue at the bank counter before immigration. Processing takes 10-30 minutes depending on queues.

**Option 3: Visa-Free Entry**
Citizens of Jordan, Malaysia, and several Arab League countries may enter Egypt without a visa for short stays. Check with your embassy before travelling.

**Requirements for All Visa Types**
- Passport valid for at least 6 months beyond your entry date
- Return or onward ticket
- Proof of accommodation (hotel booking)
- Sufficient funds for your stay

**Our Advice**
Always apply for the e-visa. It saves time at the airport, gives you peace of mind before you travel, and the process is simple. Contact our team if you need guidance.`,
        contentAr: 'الحصول على تأشيرة مصر أمر بسيط لمعظم الجنسيات.',
        author: 'Egypt Tour Team',
        coverImage: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200',
        tags: ['visa', 'entry', 'planning', '2025'],
        published: true,
        publishedAt: new Date('2025-01-10'),
      },
    }),
  ]);

  console.log(`Created ${posts.length} blog posts`);
  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });