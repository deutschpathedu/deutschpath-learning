interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label = "কোর্সের অগ্রগতি" }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>{label}</span>
        <strong>{safeValue}%</strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="progress-fill" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
