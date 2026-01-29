"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type props = {
  text?: string;
  className?: string;
};

function FormButton({ text = "Submit", className }: props) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`capitalize ${className}`}
      size={"lg"}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Please Wait
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default FormButton;
