"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "../../utils/db";
import { profileSchema } from "./schema";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/utils/actions";
// every time we use form , we will use the use server with the async function
export async function createUserProfileAction(
  prevState: any,
  formData: FormData,
) {
  try {
    const user = await getAuthUser();
    // {key : value }
    const rawData = Object.fromEntries(formData);
    const validateFields = profileSchema.parse(rawData);
    const profileData = validateFields;
    await db.profile.create({
      data: {
        ...profileData,
        clerkId: user.id,
        profileImage: user.imageUrl ?? "",
        email: user.emailAddresses[0]?.emailAddress ?? "",
      },
    });
    const clerkClientUser = (await clerkClient()).users;
    await clerkClientUser.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    redirect("/");
  } catch (error) {
    return { message: "Error creating user profile:" };
  }
}

// fetch profile image from db and send it back to the client

export async function getUserProfileImageAction() {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage || null;
}

// update profile action
export async function updateUserProfileAction(
  prevState: any,
  formData: FormData,
) {
  return { message: "update action done" };
}
