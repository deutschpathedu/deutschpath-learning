import Link from "next/link";
import { PronunciationButton } from "@/src/components/PronunciationButton";
import { Quiz } from "@/src/components/Quiz";
import { moduleOneQuiz } from "@/src/data/quiz";

export default function PracticePage() {
  return (
    <main className="page-main">
      <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Practice</span></div>
      <section className="page-intro"><span className="eyebrow">ÜBEN · অনুশীলন</span><h1>শিখুন। বলুন।<br /><span>আবার বলুন।</span></h1><p>ব্যাকরণ, কথা বলার অনুশীলন আর মডিউল কুইজ—নিজের গতিতে চর্চা করুন।</p></section>
      <div className="practice-resource-grid">
        <section className="practice-resource" id="grammar"><span className="eyebrow">GRAMMATIK 01 · ব্যাকরণ</span><h2>Personalpronomen + sein</h2><p>জার্মান ব্যক্তিবাচক সর্বনাম এবং sein (হওয়া) ক্রিয়ার বর্তমান রূপ শিখুন।</p>
          <div className="grammar-table">
            {[["ich", "bin", "আমি"], ["du", "bist", "তুমি"], ["er / sie / es", "ist", "সে / এটি"], ["wir", "sind", "আমরা"], ["ihr", "seid", "তোমরা"], ["sie / Sie", "sind", "তারা / আপনি (সম্মানসূচক)"]].map(([pronoun, form, meaning]) => <div key={pronoun}><strong lang="de">{pronoun}</strong><b lang="de">{form}</b><span lang="bn">{meaning}</span><PronunciationButton text={`${pronoun} ${form}`} /></div>)}
          </div><div className="example-highlight"><strong lang="de">Ich bin Amina.</strong><span lang="bn">আমি আমিনা।</span><PronunciationButton text="Ich bin Amina." /></div>
        </section>
        <section className="practice-resource" id="speaking"><span className="eyebrow">SPRECHEN 01 · কথা বলুন</span><h2>নিজেকে পরিচয় করান</h2><p>প্রতিটি বাক্যের নমুনা শুনুন। এরপর নিজের তথ্য বসিয়ে বলুন।</p>
          <div className="speaking-prompts">{["Ich heiße ...", "Ich komme aus ...", "Ich wohne in ...", "Ich spreche ..."].map((phrase, index) => <div key={phrase}><span>0{index + 1}</span><strong lang="de">{phrase}</strong><PronunciationButton text={phrase.replace("...", "Amina")} /></div>)}</div>
        </section>
        <section className="practice-resource assignment-resource" id="assignment"><span className="eyebrow">DEINE AUFGABE · আপনার কাজ</span><h2>Assignment 01</h2><p>নিজের পরিচয় দিয়ে ৪–৫টি ছোট জার্মান বাক্য লিখুন বা জোরে বলুন।</p>
          <ol><li>আপনার নাম বলুন: <b lang="de">Ich heiße ...</b></li><li>আপনার দেশ বলুন: <b lang="de">Ich komme aus ...</b></li><li>আপনার শহর বলুন: <b lang="de">Ich wohne in ...</b></li><li>আপনি যে ভাষাগুলো বলেন তা জানান: <b lang="de">Ich spreche ...</b></li></ol>
          <p className="assignment-note">এটি ব্যক্তিগত অনুশীলন—এখনো অনলাইনে জমা দেওয়ার প্রয়োজন নেই।</p>
        </section>
      </div>
      <div className="practice-quiz"><Quiz questions={moduleOneQuiz} /></div>
    </main>
  );
}
