import type { Course, CourseModule, Lesson } from "@/src/types/curriculum";

export const lessons: Lesson[] = [
  {
    id: "lesson-01",
    title: "Das Alphabet & Aussprache",
    description: "জার্মান বর্ণমালা ও উচ্চারণের প্রথম ধাপ",
    objectives: [
      "জার্মান বর্ণমালার ২৬টি অক্ষর চিনতে পারা",
      "Ä, Ö, Ü এবং ß-এর শব্দ শুনে আলাদা করতে পারা",
      "কিছু পরিচিত জার্মান শব্দ স্পষ্টভাবে উচ্চারণ করা",
    ],
    explanation:
      "জার্মান বর্ণমালায় ইংরেজির মতো ২৬টি মূল অক্ষর আছে। এর সঙ্গে Ä, Ö, Ü—এই তিনটি umlaut এবং ß (Eszett) ব্যবহার হয়। শুরুতে প্রতিটি অক্ষর ধীরে শুনুন এবং শব্দের ভেতরে বলার চেষ্টা করুন।",
    examples: [
      { german: "A, B, C, D, E, F, G", bengali: "আ, বে, ৎসে, দে, এ, এফ, গে" },
      { german: "Ä wie Äpfel", bengali: "Ä—আপফেল (আপেল)-এর মতো" },
      { german: "Ö wie schön", bengali: "Ö—শেন (সুন্দর)-এর মতো" },
      { german: "Ü wie Tür", bengali: "Ü—ট্যুর (দরজা)-এর মতো" },
      { german: "ß wie Straße", bengali: "ß-কে ‘এসৎসেট’ বলা হয়; Straße = রাস্তা" },
    ],
    vocabulary: [
      { german: "das Alphabet", bengali: "বর্ণমালা", pronunciation: "das Alphabet" },
      { german: "der Apfel", bengali: "আপেল", pronunciation: "der Apfel" },
      { german: "schön", bengali: "সুন্দর", pronunciation: "schön" },
      { german: "die Tür", bengali: "দরজা", pronunciation: "die Tür" },
      { german: "die Straße", bengali: "রাস্তা", pronunciation: "die Straße" },
    ],
  },
  {
    id: "lesson-02",
    title: "Begrüßungen",
    description: "সালাম, শুভেচ্ছা এবং ভদ্রভাবে কথা শুরু করা",
    objectives: ["সাধারণ শুভেচ্ছা বলা", "বিদায় ও ধন্যবাদ জানানো", "কেউ কেমন আছে জিজ্ঞেস করা"],
    explanation:
      "জার্মান ভাষায় দিনের সময় অনুযায়ী শুভেচ্ছা বদলায়। বন্ধুদের সঙ্গে Hallo বলা যায়; আনুষ্ঠানিক পরিবেশে Guten Tag বা Guten Abend ব্যবহার করুন।",
    examples: [
      { german: "Hallo!", bengali: "হ্যালো!" },
      { german: "Guten Morgen!", bengali: "সুপ্রভাত!" },
      { german: "Guten Tag!", bengali: "শুভ দিন / নমস্কার!" },
      { german: "Guten Abend!", bengali: "শুভ সন্ধ্যা!" },
      { german: "Tschüss!", bengali: "বিদায়! (অনানুষ্ঠানিক)" },
      { german: "Danke!", bengali: "ধন্যবাদ!" },
      { german: "Bitte!", bengali: "দয়া করে / স্বাগতম!" },
      { german: "Wie geht es dir?", bengali: "তুমি কেমন আছ?" },
      { german: "Mir geht es gut.", bengali: "আমি ভালো আছি।" },
    ],
    vocabulary: [
      { german: "Hallo", bengali: "হ্যালো", pronunciation: "Hallo" },
      { german: "Guten Morgen", bengali: "সুপ্রভাত", pronunciation: "Guten Morgen" },
      { german: "Guten Tag", bengali: "শুভ দিন", pronunciation: "Guten Tag" },
      { german: "Guten Abend", bengali: "শুভ সন্ধ্যা", pronunciation: "Guten Abend" },
      { german: "Tschüss", bengali: "বিদায়", pronunciation: "Tschüss" },
      { german: "Danke", bengali: "ধন্যবাদ", pronunciation: "Danke" },
      { german: "Bitte", bengali: "দয়া করে / স্বাগতম", pronunciation: "Bitte" },
      { german: "Wie geht es dir?", bengali: "তুমি কেমন আছ?", pronunciation: "Wie geht es dir?" },
      { german: "Mir geht es gut.", bengali: "আমি ভালো আছি।", pronunciation: "Mir geht es gut." },
    ],
  },
  {
    id: "lesson-03",
    title: "Sich vorstellen",
    description: "নিজের নাম, দেশ, বাসস্থান ও ভাষা পরিচয় করানো",
    objectives: ["নিজের নাম বলা", "নিজের দেশ ও শহর বলা", "কোন ভাষায় কথা বলেন তা জানানো"],
    explanation:
      "নিজের পরিচয় দিতে Ich (আমি) দিয়ে বাক্য শুরু করুন। ফাঁকা জায়গায় আপনার তথ্য বসিয়ে বাক্যগুলো বারবার বলুন।",
    examples: [
      { german: "Ich heiße ...", bengali: "আমার নাম ..." },
      { german: "Ich bin ...", bengali: "আমি ... (পরিচয়/পেশা)" },
      { german: "Ich komme aus ...", bengali: "আমি ... থেকে এসেছি।" },
      { german: "Ich wohne in ...", bengali: "আমি ...-এ থাকি।" },
      { german: "Ich spreche ...", bengali: "আমি ... ভাষায় কথা বলি।" },
      { german: "Ich heiße Amina. Ich komme aus Bangladesch.", bengali: "আমার নাম আমিনা। আমি বাংলাদেশ থেকে এসেছি।" },
    ],
    vocabulary: [
      { german: "heißen", bengali: "নাম হওয়া / নাম বলা", pronunciation: "heißen" },
      { german: "kommen", bengali: "আসা", pronunciation: "kommen" },
      { german: "wohnen", bengali: "থাকা / বসবাস করা", pronunciation: "wohnen" },
      { german: "sprechen", bengali: "কথা বলা", pronunciation: "sprechen" },
      { german: "Bangladesch", bengali: "বাংলাদেশ", pronunciation: "Bangladesch" },
    ],
  },
  {
    id: "lesson-04",
    title: "Länder & Sprachen",
    description: "দেশের নাম, ভাষা এবং নিজের ভাষা সম্পর্কে বলা",
    objectives: ["কয়েকটি দেশের নাম বলা", "দেশ ও ভাষার নাম মেলানো", "আমি ... ভাষায় কথা বলি বলতে পারা"],
    explanation:
      "দেশের নাম ও ভাষার নাম অনেক সময় আলাদা হয়। জার্মান ভাষায় নিজের ভাষা বলতে Ich spreche-এর পরে ভাষার নাম বসান।",
    examples: [
      { german: "Bangladesch — Bangla", bengali: "বাংলাদেশ — বাংলা" },
      { german: "Deutschland — Deutsch", bengali: "জার্মানি — জার্মান" },
      { german: "Indien — Hindi", bengali: "ভারত — হিন্দি" },
      { german: "England — Englisch", bengali: "ইংল্যান্ড — ইংরেজি" },
      { german: "Ich spreche Bangla und ein bisschen Deutsch.", bengali: "আমি বাংলা এবং অল্প জার্মান বলি।" },
    ],
    vocabulary: [
      { german: "das Land", bengali: "দেশ", pronunciation: "das Land" },
      { german: "die Sprache", bengali: "ভাষা", pronunciation: "die Sprache" },
      { german: "Bangladesch", bengali: "বাংলাদেশ", pronunciation: "Bangladesch" },
      { german: "Deutschland", bengali: "জার্মানি", pronunciation: "Deutschland" },
      { german: "Deutsch", bengali: "জার্মান ভাষা", pronunciation: "Deutsch" },
      { german: "ein bisschen", bengali: "একটু / অল্প", pronunciation: "ein bisschen" },
    ],
  },
];

const moduleDescriptions = [
  "কোর্সের পরিচিতি, শেখার নিয়ম এবং আপনার প্রথম পদক্ষেপ।",
  "বর্ণমালা, শুভেচ্ছা এবং নিজের পরিচয় দেওয়া শিখুন।",
  "নিজের সম্পর্কে আরও বলুন এবং প্রয়োজনীয় প্রশ্ন করুন।",
  "সংখ্যা, সময় ও দৈনন্দিন কাজের শব্দ শিখুন।",
  "পরিবার ও বন্ধুদের পরিচয় করিয়ে দিন।",
  "ঘর, আসবাব এবং বাসস্থানের বর্ণনা শিখুন।",
  "খাবারের নাম বলুন এবং ক্যাফেতে অর্ডার দিন।",
  "অবসর, রুটিন ও পছন্দের কথা বলুন।",
  "পড়াশোনা, শেখা ও কাজ নিয়ে কথা বলুন।",
  "শহরের জায়গা খুঁজুন এবং দিকনির্দেশনা বুঝুন।",
  "দোকানে কেনাকাটা ও দাম জিজ্ঞেস করার অনুশীলন করুন।",
  "আবহাওয়া ও ভ্রমণের প্রয়োজনীয় ভাষা শিখুন।",
  "শরীরের অবস্থা ও সাধারণ স্বাস্থ্য-সংক্রান্ত কথা বলুন।",
  "প্রতিদিনের কথোপকথনে আত্মবিশ্বাসী হন।",
  "A1 পরীক্ষার ধরন বুঝে চারটি দক্ষতায় অনুশীলন করুন।",
  "পুনরাবৃত্তি করে চূড়ান্ত A1 মূল্যায়নের প্রস্তুতি নিন।",
];

export const a1Modules: CourseModule[] = [
  { number: "00", title: "Start Here", description: "কোর্সের সঙ্গে পরিচিত হন এবং শেখার যাত্রা শুরু করুন।", lessons: [], unlocked: true, progress: 0 },
  ...[
    "Erste Schritte", "Über mich", "Zahlen & Alltag", "Familie & Freunde", "Wohnen",
    "Essen & Trinken", "Alltag & Freizeit", "Schule, Lernen & Arbeit", "Stadt & Orientierung",
    "Einkaufen", "Wetter & Reisen", "Gesundheit", "Kommunikation", "A1 Prüfungsvorbereitung",
    "Final Revision & A1 Test",
  ].map((title, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description: moduleDescriptions[index + 1],
    lessons: index === 0 ? lessons : [],
    unlocked: index === 0,
    progress: 0,
  })),
];

export const a1Course: Course = {
  id: "german-a1",
  level: "A1",
  title: "German A1",
  batch: "Batch 01",
  description: "জার্মান ভাষার ভিত্তি তৈরি করুন—একটি ছোট, পরিষ্কার ধাপ করে।",
  modules: a1Modules,
};

export const moduleOne = a1Modules[1];
export const lessonById = (lessonId: string) => lessons.find((lesson) => lesson.id === lessonId);
