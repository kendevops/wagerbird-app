import { ReactNode } from "react";

export interface LicenseBadgeProps {
  icon?: ReactNode;
  label?: string;
  labelColor?: string;
  text: string;
}

export default function LicenseBadge({ icon, label, labelColor, text }: LicenseBadgeProps) {
  return (
    <div className="license-badge">
      {icon && <span className="license-badge-icon">{icon}</span>}
      {label && (
        <span
          className="license-badge-label"
          style={labelColor ? { color: labelColor } : undefined}
        >
          {label}
        </span>
      )}
      <span className="license-badge-text">{text}</span>
    </div>
  );
}
