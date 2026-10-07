import "@fontsource/syne/800.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5, 10.5], [16, 21.5]];

export const SITE: Site = {
  name: "GR Fitness Point",
  sub: { en: "Modern gym · Panchgaon, Fazalwas", hi: "मॉडर्न जिम · पंचगांव, फ़ज़लवास" },
  banner: { en: "Morning and evening batches, Monday to Saturday: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार सुबह और शाम के बैच: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "919990600403",
  phoneDisplay: "+91 99906 00403",
  lat: 28.314855,
  lon: 76.9023011,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#070a10",
    bg2: "#0c1019",
    panel: "#111724",
    ink: "#eef4ff",
    ink2: "#b9c4d6",
    ink3: "#7a8699",
    line: "#1b2433",
    accent: "#38e1ff",
    onAccent: "#00222b",
    display: "Syne",
    weight: 800,
    upper: false,
  },
  scene: "neon",
  align: "left",
  hero: {
    title: [
      { en: "Under the hex lights.", hi: "हेक्स लाइट्स के नीचे।" },
      { en: "Train at GR.", hi: "GR में ट्रेनिंग।" },
    ],
    proof: {
      en: "4.9 on Google from 90 reviews, with no one-star reviews. Modern, well-maintained equipment and trainers members call knowledgeable and calm.",
      hi: "गूगल पर 90 रिव्यू से 4.9, एक भी वन-स्टार नहीं। मॉडर्न और अच्छी हालत वाली मशीनें, और ट्रेनर जिन्हें मेंबर जानकार और शांत बताते हैं।",
    },
    fallback: "/img/p6.jpg",
  },
  marquee: ["Strength", "Cardio", "Deadlifts", "Form coaching", "Morning batch", "Evening batch", "Panchgaon"],
  dishes: {
    title: { en: "What members notice", hi: "मेंबर्स क्या नोटिस करते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Equipment", hi: "इक्विपमेंट" }, quote: "Top-tier, modern equipment that is always well-maintained.", img: "/img/p3.jpg" },
      { name: { en: "Trainers", hi: "ट्रेनर" }, quote: "The trainers are incredibly knowledgeable and genuinely care about your progress.", img: "/img/p9.jpg" },
      { name: { en: "Clean", hi: "साफ़-सफ़ाई" }, quote: "Gym is always spotlessly clean. In short, this is the best gym.", img: "/img/p14.jpg" },
      { name: { en: "Sound", hi: "म्यूज़िक" }, quote: "Good ambience, proper hygine , good workout equipments, good quality sound and a proper place to have a workout session 💯." },
      { name: { en: "Habits", hi: "आदतें" }, quote: "Helped me build great habits on a regular basis." },
      { name: { en: "Every level", hi: "हर लेवल" }, quote: "This gym has motivating atmosphere, perfect for all fitness levels." },
    ],
  },
  gallery: {
    title: { en: "Inside GR Fitness Point", hi: "GR फ़िटनेस पॉइंट के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p6.jpg", alt: "Hexagon neon ceiling over the gym floor", wide: true },
      { src: "/img/p1.jpg", alt: "Neon-lit training area" },
      { src: "/img/p5.jpg", alt: "Member deadlifting" },
      { src: "/img/p3.jpg", alt: "Wide view of the machines", wide: true },
      { src: "/img/p9.jpg", alt: "Trainer correcting a member's form" },
      { src: "/img/p13.jpg", alt: "Strength equipment" },
    ],
  },
  feature: {
    kind: "daynight",
    title: { en: "Two batches, two moods", hi: "दो बैच, दो माहौल" },
    body: { en: "Quiet mornings, busy evenings. Pick the one that suits you.", hi: "शांत सुबह, भरी हुई शाम। जो आपको ठीक लगे वो चुनें।" },
    day: {
      label: { en: "Morning · 5 to 10:30", hi: "सुबह · 5 से 10:30" },
      body: { en: "Calmer floor, more room on the machines.", hi: "कम भीड़, मशीनों पर ज़्यादा जगह।" },
      img: "/img/p3.jpg",
      quote: "If you dont want to workout in croud then go in the morning otherwise the gym is best.",
    },
    night: {
      label: { en: "Evening · 4 to 9:30", hi: "शाम · 4 से 9:30" },
      body: { en: "Lights on, music up, the floor full.", hi: "लाइट्स, म्यूज़िक और पूरा जोश।" },
      img: "/img/p1.jpg",
      quote: "The gym has an energetic vibe with motivating music.",
    },
  },
  reviews: {
    title: { en: "Ninety reviews, no one-stars", hi: "नब्बे रिव्यू, एक भी वन-स्टार नहीं" },
    rating: 4.9,
    dist: [84, 5, 1, 0, 0],
    quotes: [
      { quote: "All thanks to Rahul Yadav, one of the best and finest trainer who guide me very well.", stars: 5 },
      { quote: "The gym is very good. All the machines are very good. The nature of trainer is very calm and helpful.", stars: 5 },
      { quote: "Really great experience...top notch equipment..and also fair price! Trainer is well experienced.", stars: 5 },
      { quote: "Best Affordable gym in the area.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Near Sarva Haryana Gramin Bank", hi: "सर्व हरियाणा ग्रामीण बैंक के पास" },
    img: "/img/p14.jpg",
    alt: "Training floor at GR Fitness Point",
    address: { en: "Near Sarva Haryana Gramin Bank, Panchgaon, Fazalwas, Haryana", hi: "सर्व हरियाणा ग्रामीण बैंक के पास, पंचगांव, फ़ज़लवास, हरियाणा" },
    note: { en: "Monday to Saturday, 5 to 10:30 am and 4 to 9:30 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से 10:30 और शाम 4 से 9:30। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Kit", hi: "मशीनें" }, title: { en: "Always well-maintained.", hi: "हमेशा अच्छी हालत में।" }, quote: "Top-tier, modern equipment that is always well-maintained." },
    { kicker: { en: "Coaching", hi: "कोचिंग" }, title: { en: "Trainers who care.", hi: "ट्रेनर जो ध्यान रखते हैं।" }, quote: "The trainers are incredibly knowledgeable and genuinely care about your progress." },
    { kicker: { en: "Value", hi: "क़ीमत" }, title: { en: "Fair on the wallet.", hi: "जेब पर हल्का।" }, quote: "Best Affordable gym in the area." },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Muscle gain", hi: "मसल बनाना" } },
      { name: { en: "General fitness", hi: "जनरल फ़िटनेस" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi GR Fitness Point, I'd like to visit:", hi: "नमस्ते GR फ़िटनेस पॉइंट, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi GR Fitness Point, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते GR फ़िटनेस पॉइंट, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
