"use";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import Link from "next/link";
import { BarcodeIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import SignOutBtn from "../auth/SignOutBtn";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import UserIcon from "./userIcon";
function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <UserIcon />
          <Separator orientation="vertical" className="mx-2 h-4" />
          <BarcodeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <SignedIn>
          {links.map((link) => (
            <DropdownMenuCheckboxItem key={link.label}>
              <Link href={link.href} className="w-full">
                {link.label}
              </Link>
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <SignOutBtn />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="w-full" size={"sm"}>
              Login
            </Button>
          </SignInButton>
          <DropdownMenuSeparator />
          <SignUpButton mode="modal">
            <Button className="w-full" variant={"outline"} size={"sm"}>
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
