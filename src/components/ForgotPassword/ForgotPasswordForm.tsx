import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput } from "../Input";

export default function ForgotPassword() {
  const { register, handleSubmit, formState } = useForm();

  const forgotPasswordSubmit = (formValues: FieldValues) => {
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit(forgotPasswordSubmit)}>
      <Heading as="h2" mb={3}>
        Forgot your password? 🔥
      </Heading>
      <Text fontSize="md" mb={3}>
        Enter your email below and you will get an email to reset your password
      </Text>

      <FormControl isRequired mb={3}>
        <EmailInput register={register} formState={formState} />
      </FormControl>

      <Button
        type="submit"
        color="white"
        backgroundColor="#0c2d48"
        w="100%"
        mb={3}
      >
        Send email
      </Button>

      <Text fontSize="md">
        {"Go back to "}
        <AppLink href="/login" text="login." />
      </Text>
    </form>
  );
}
