import { createUserProfileAction } from "@/actions/profileActions";
import FormButton from "@/components/form/FormButton";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2Icon, UserCircle } from "lucide-react";

function CreateUserProfile() {
  return (
    <section>
      <div className="flex my-5 gap-3 items-end">
        <h1 className=" font-bold text-3xl ">Add New User</h1>
        <UserCircle className="mb-0.5" />
      </div>

      <FormContainer actions={createUserProfileAction}>
        <div className="grid mt-4 gap-4 max-w-1/3 border rounded-xl p-4">
          <FormInput name="firstName" type="text" label="First Name" required />
          <FormInput name="lastName" type="text" label="Last Name" required />
          <FormInput name="username" type="text" label="Username" required />
        </div>
        <FormButton text="Create User Profile" className="mt-4" />
      </FormContainer>
    </section>
  );
}

export default CreateUserProfile;
