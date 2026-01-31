"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { redirect } from "next/navigation";

// get auth user from clerk only
export async function getAuthUser() {
  const user = await currentUser();
  if (!user) throw new Error("User not found");
  if (!user.privateMetadata.hasProfile) {
    redirect("/profile/create");
  }
  return user;
}

// get the user profile from my dashboard if the user has profile and redirect to create profile page if not
export async function getUserProfile() {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) {
    redirect("/profile/create");
  }
  return profile;
}
