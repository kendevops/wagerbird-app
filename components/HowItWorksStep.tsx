import { ReactNode } from "react";

export interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
  /** "badge" = circular icon badge (default), "card" = inline card mockup with STEP label */
  variant?: "badge" | "card";
}

export default function HowItWorksStep({
  number,
  title,
  description,
  icon,
  variant = "badge",
}: HowItWorksStepProps) {
  return (
    <div className="hiw-step">
      {variant === "card" ? (
        <>
          <span className="hiw-step-label">STEP {number}</span>
          {icon && <div className="hiw-step-card-icon">{icon}</div>}
        </>
      ) : icon ? (
        <div className="hiw-step-icon" aria-hidden="true">{icon}</div>
      ) : (
        <span className="hiw-step-number" aria-hidden="true">{number}</span>
      )}
      <h3 className="hiw-step-title">{title}</h3>
      <p className="hiw-step-description">{description}</p>
    </div>
  );
}
