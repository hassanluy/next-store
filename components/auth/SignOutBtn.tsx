"use client";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { toast } from "sonner";
function SignOutBtn() {
  function handleSignOut() {
    toast.success("Signed out successfully");
  }
  return (
    <SignOutButton redirectUrl="/">
      <Button
        className="ml-3"
        onClick={handleSignOut}
        variant={"destructive"}
        size={"sm"}
      >
        Sign Out
      </Button>
    </SignOutButton>
  );
}

export default SignOutBtn;
