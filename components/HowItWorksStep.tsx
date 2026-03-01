import { ReactNode } from "react";

export interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function HowItWorksStep({
  number,
  title,
  description,
  icon,
}: HowItWorksStepProps) {
  return (
    <div className="hiw-step">
      {icon ? (
        <div className="hiw-step-icon" aria-hidden="true">{icon}</div>
      ) : (
        <span className="hiw-step-number" aria-hidden="true">{number}</span>
      )}
      <h3 className="hiw-step-title">{title}</h3>
      <p className="hiw-step-description">{description}</p>
    </div>
  );
}
