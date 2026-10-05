"use client";

import { useState } from "react";

interface PronunciationButtonProps {
  text: string;
  className?: string;
}

export function PronunciationButton({ text, className = "" }: PronunciationButtonProps) {
  const [unsupported, setUnsupported] = useState(false);

  function speak() {
    if (!("speechSynthesis" in window)) {
      setUnsupported(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
    setUnsupported(false);
  }

  return (
    <span className="pronunciation-control">
      <button
        className={`speaker-button ${className}`}
        type="button"
        aria-label={`জার্মান উচ্চারণ শুনুন: ${text}`}
        title="উচ্চারণ শুনুন"
        onClick={speak}
      >
        <span aria-hidden="true">◖))</span>
      </button>
      {unsupported && <span className="sr-only" role="status">এই ব্রাউজারে অডিও উচ্চারণ সমর্থিত নয়।</span>}
    </span>
  );
}
