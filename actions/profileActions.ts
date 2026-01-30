"use server";
import { currentUser } from "@clerk/nextjs/server";
import db from "../utils/db";
import { profileSchema } from "@/utils/schema";
// every time we use form , we will use the use server with the async function
export async function createUserProfileAction(
  prevState: any,
  formData: FormData,
) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not found");
    // {key : value }
    const rawData = Object.fromEntries(formData);
    const validateFields = profileSchema.parse(rawData);
    await db.profile.create({
      data: {
        ...validateFields,
        clerkId: user.id,
        profileImage: user.imageUrl ?? "",
        email: user.emailAddresses[0]?.emailAddress ?? "",
      },
    });
  } catch (error) {
    console.log("Error creating user profile:", error);
  }
}
