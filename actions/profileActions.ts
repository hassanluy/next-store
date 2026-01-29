"use server";
// every time we use form , we will use the use server with the async function
export async function createUserProfileAction(
  prevState: any,
  formData: FormData,
) {
  "use server";
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const userName = formData.get("username");
  return { message: "Profile Created Successfully" };
}
