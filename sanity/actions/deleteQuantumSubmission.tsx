"use client";

import { useDocumentOperation } from "sanity";

export function DeleteQuantumSubmissionAction(props: {
  id: string;
  type: string;
  onComplete: () => void;
}) {
  const { delete: deleteOp } = useDocumentOperation(props.id, props.type);

  if (props.type !== "quantumSubmission") return null;

  return {
    label: "Delete submission",
    tone: "critical" as const,
    onHandle: () => {
      deleteOp.execute();
      props.onComplete();
    },
    disabled: Boolean(deleteOp.disabled),
  };
}
