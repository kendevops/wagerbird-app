export interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorksStep({
  number,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <div className="hiw-step">
      <span className="hiw-step-number" aria-hidden="true">
        {number}
      </span>
      <h3 className="hiw-step-title">{title}</h3>
      <p className="hiw-step-description">{description}</p>
    </div>
  );
}
