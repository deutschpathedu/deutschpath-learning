import Link from "next/link";
import type { CourseModule } from "@/src/types/curriculum";
import { ProgressBar } from "@/src/components/ProgressBar";

interface ModuleCardProps {
  module: CourseModule;
  progress: number;
}

export function ModuleCard({ module, progress }: ModuleCardProps) {
  const isStart = module.number === "00";
  const accessible = module.unlocked;
  const href = isStart ? "/learn" : "/learn/a1/module-01";
  return (
    <article className={`module-card${accessible ? "" : " module-locked"}`}>
      <div className="module-card-head">
        <span className={`module-number${accessible ? " module-number-active" : ""}`}>{module.number}</span>
        <span className={`module-status${accessible ? " status-open" : " status-locked"}`}>
          {accessible ? (progress === 100 ? "সম্পন্ন" : "চালু") : "পরে আসছে"}
        </span>
      </div>
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      {accessible ? (
        <>
          <ProgressBar value={progress} label={`${module.title} অগ্রগতি`} />
          <Link className="text-link" href={href}>
            {progress > 0 ? "চালিয়ে যান" : isStart ? "কোর্স দেখুন" : "মডিউল শুরু করুন"} <span aria-hidden="true">→</span>
          </Link>
        </>
      ) : (
        <p className="locked-note"><span aria-hidden="true">◌</span> আপনার শেখার পথ খুললে এখানে পাবেন</p>
      )}
    </article>
  );
}
