import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput } from "../Input";
import { useAuth } from "../../hooks";

export default function ForgotPassword() {
  const [requestInProgress, setRequestInProgress] = React.useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { resetPassword } = useAuth();

  const forgotPasswordSubmit = async (formValues: FieldValues) => {
    if (!resetPassword) return;
    setRequestInProgress(true);
    try {
      const { email } = formValues;
      await resetPassword(email);
    } catch (error) {
      console.error(error);
    } finally {
      setRequestInProgress(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(forgotPasswordSubmit)}>
      <Heading as="h2" mb={3}>
        Forgot your password? 🔥
      </Heading>
      <Text fontSize="md" mb={6}>
        Enter your email below and you will get an email to reset your password
      </Text>

      <FormControl isInvalid={errors.email} isRequired mb={3}>
        <EmailInput register={register} formState={formState} />
      </FormControl>

      <Button
        type="submit"
        color="white"
        isLoading={requestInProgress}
        isDisabled={requestInProgress}
        backgroundColor="#0c2d48"
        w="100%"
        mb={6}
      >
        Send email
      </Button>

      <Text fontSize="md" mb={3}>
        {"Go back to "}
        <AppLink href="/login" text="login." />
      </Text>
      <Text fontSize="md">
        {"First time here? "}
        <AppLink href="/signup" text="Signup." />
      </Text>
    </form>
  );
}
