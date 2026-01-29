import React from "react";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  label?: string;
};
function FormInput({
  name,
  type,
  placeholder,
  required = true,
  defaultValue,
  label,
}: FormInputProps) {
  return (
    <div className="mb-4 ">
      <label htmlFor={name} className="capitalize">
        {label ?? placeholder}
      </label>
      <Input
        type={type}
        placeholder={placeholder ?? `Enter Your ${label}`}
        required={required}
        defaultValue={defaultValue}
        name={name}
        id={name}
      />
    </div>
  );
}

export default FormInput;
