import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput, PasswordInput } from "../Input";

export default function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleLoginSubmit = (formValues: FieldValues) => {
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <Heading as="h2" mb={3}>
        Welcome back! 🔥
      </Heading>
      <Text fontSize="md" mb={3}>
        {"First time here? "}
        <AppLink href="/signup" text="Signup." />
      </Text>

      <FormControl isInvalid={errors.email} isRequired mb={3}>
        <EmailInput register={register} formState={formState} />
      </FormControl>

      <FormControl isRequired mb={3}>
        <PasswordInput register={register} />
      </FormControl>

      <Text fontSize="md" mb={3} textAlign="right">
        Forgot your password?
      </Text>

      <Button
        type="submit"
        color="white"
        backgroundColor="#0c2d48"
        w="100%"
        mb={3}
      >
        Log in
      </Button>

      <Text fontSize="md">
        By performing this action, you agree to our Terms of Use and Privacy
        Policy.
      </Text>
    </form>
  );
}
