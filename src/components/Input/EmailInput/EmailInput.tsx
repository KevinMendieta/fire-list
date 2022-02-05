import React from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { FormLabel, FormHelperText, Input } from "@chakra-ui/react";

import { validateEmail } from "../../../helpers/validationHelpers";

interface EmailInputProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}

export default function EmailInput(props: EmailInputProps) {
  const {
    register,
    formState: { errors },
  } = props;

  return (
    <>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        id="email"
        type="text"
        backgroundColor="white"
        {...register("email", { required: true, validate: validateEmail })}
      />
      {errors.email && (
        <FormHelperText color="red">
          {errors.email.type === "required"
            ? "Email is required."
            : "Ivalid email."}
        </FormHelperText>
      )}
    </>
  );
}
