import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput, PasswordInput } from "../Input";
import { useAuth } from "../../hooks";

export default function SignupForm(props: { onSuccessSignup: () => void }) {
  const { onSuccessSignup } = props;
  const [requestInProgress, setRequestInProgress] = React.useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { signup } = useAuth();

  const handleLoginSubmit = async (formValues: FieldValues) => {
    if (!signup) return;
    setRequestInProgress(true);
    try {
      const { email, password } = formValues;
      await signup(email, password);
      onSuccessSignup();
    } catch (error) {
      console.error(error);
      setRequestInProgress(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <Heading as="h2" mb={3}>
        🔥 Join Fire List Today! 🔥
      </Heading>

      <Text fontSize="md" mb={3}>
        {"Let's get started. It's free!"}
      </Text>

      <FormControl isInvalid={errors.email} isRequired mb={3}>
        <EmailInput register={register} formState={formState} />
      </FormControl>

      <FormControl isRequired mb={3}>
        <PasswordInput register={register} />
      </FormControl>

      <Button
        type="submit"
        color="white"
        isLoading={requestInProgress}
        disabled={requestInProgress}
        backgroundColor="#0c2d48"
        w="100%"
        mb={3}
      >
        Signup
      </Button>

      <Text fontSize="md" mb={3}>
        By performing this action, you agree to our Terms of Use and Privacy
        Policy.
      </Text>

      <Text fontSize="md">
        {"If you already have a Wonderschool account, please "}
        <AppLink href="/login" text="Login in." />
      </Text>
    </form>
  );
}
