export interface QuizQuestionData {
  prompt: string;
  choices: string[];
  answer: number;
}

export const moduleOneQuiz: QuizQuestionData[] = [
  { prompt: "“Guten Morgen” এর অর্থ কী?", choices: ["শুভ সন্ধ্যা", "সুপ্রভাত", "বিদায়", "ধন্যবাদ"], answer: 1 },
  { prompt: "“ধন্যবাদ” জার্মান ভাষায় কোনটি?", choices: ["Bitte", "Tschüss", "Danke", "Hallo"], answer: 2 },
  { prompt: "“Ich heiße Samira.” এর অর্থ কী?", choices: ["আমি সামিরার সঙ্গে থাকি।", "আমার নাম সামিরা।", "আমি সামিরা থেকে এসেছি।", "আমি সামিরা বলি।"], answer: 1 },
  { prompt: "“আমি বাংলাদেশ থেকে এসেছি।” — সঠিক বাক্য কোনটি?", choices: ["Ich wohne aus Bangladesch.", "Ich komme aus Bangladesch.", "Ich heiße Bangladesch.", "Ich bin Bangladesch."], answer: 1 },
  { prompt: "“তুমি” (অনানুষ্ঠানিক) এর জার্মান সর্বনাম কোনটি?", choices: ["ich", "du", "wir", "sie"], answer: 1 },
  { prompt: "“Ich ___ müde.” বাক্যে sein-এর সঠিক রূপ কোনটি?", choices: ["bist", "sind", "bin", "ist"], answer: 2 },
  { prompt: "“Er ___ aus Deutschland.” বাক্যে শূন্যস্থানে কী হবে?", choices: ["bin", "bist", "sind", "ist"], answer: 3 },
  { prompt: "“Wir” এর সঙ্গে sein-এর সঠিক রূপ কোনটি?", choices: ["seid", "sind", "ist", "bin"], answer: 1 },
  { prompt: "“Wie geht es dir?” কীভাবে উত্তর দেওয়া যায়?", choices: ["Mir geht es gut.", "Ich komme gut.", "Guten Morgen.", "Bitte schön."], answer: 0 },
];
