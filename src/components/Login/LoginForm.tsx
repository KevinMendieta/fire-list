import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput, PasswordInput } from "../Input";
import { useAuth } from "../../hooks";

export default function LoginForm() {
  const [requestInProgress, setRequestInProgress] = React.useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { login } = useAuth();

  const handleLoginSubmit = async (formValues: FieldValues) => {
    if (!login) return;
    setRequestInProgress(true);
    try {
      const { email, password } = formValues;
      await login(email, password);
    } catch (error) {
      console.error(error);
      setRequestInProgress(false);
    }
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
        isLoading={requestInProgress}
        isDisabled={requestInProgress}
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
