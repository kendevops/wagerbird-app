"use client";

import { useState } from "react";
import type { DocumentActionComponent } from "sanity";
import { useDocumentOperation } from "sanity";
import { TrashIcon } from "@sanity/icons";

export const DeleteWithConfirm: DocumentActionComponent = (props) => {
  const { id, type } = props;
  const { delete: deleteOp } = useDocumentOperation(id, type);
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!deleteOp) return null;

  const onHandle = () => setConfirmOpen(true);

  const onConfirm = () => {
    deleteOp.execute();
    setConfirmOpen(false);
  };

  const onCancel = () => setConfirmOpen(false);

  return {
    label: "Delete",
    tone: "critical",
    icon: TrashIcon,
    onHandle,
    dialog: confirmOpen && {
      type: "confirm",
      color: "danger",
      message: "Are you sure you want to delete this page? This action cannot be undone.",
      onConfirm,
      onCancel,
    },
  };
};
