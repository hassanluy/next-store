import { getUserProfileImageAction } from "@/features/profile/actions";

async function UserIcon() {
  const userImage = await getUserProfileImageAction();
  if (!userImage) {
    return <div className="w-6 h-6 rounded-full bg-gray-300"></div>;
  }

  return (
    <div>
      {userImage ? (
        <img
          src={userImage}
          alt="User Profile"
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
      )}
    </div>
  );
}

export default UserIcon;
