"use client";
import React, { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { toast } from "sonner";
const initialStateData = {
  message: "",
};
function FormContainer({
  actions,
  children,
}: {
  actions: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(actions, initialStateData);
  useEffect(() => {
    toast(state.message);
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
