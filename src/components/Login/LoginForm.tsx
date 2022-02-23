import React from "react";
import { Button, FormControl, Heading, Text } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";

import AppLink from "../AppLink";
import { EmailInput, PasswordInput } from "../Input";
import Alert, { AlertTypeEnum, AlertMessage } from "../Alert";
import { useAuth } from "../../hooks";

export default function LoginForm(props: { onSuccessLogin: () => void }) {
  const { onSuccessLogin } = props;
  const [requestInProgress, setRequestInProgress] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState<AlertMessage | null>(
    null
  );

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { login } = useAuth();

  const handleLoginSubmit = async (formValues: FieldValues) => {
    if (!login) return;
    setRequestInProgress(true);
    try {
      const { email, password } = formValues;
      await login(email, password);
      onSuccessLogin();
    } catch (error) {
      setAlertMessage({
        type: AlertTypeEnum.Error,
        message: "Incorrect password or email.",
      });
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
        <PasswordInput register={register} formState={formState} />
      </FormControl>

      <Alert
        alertMessage={alertMessage}
        onDismiss={() => setAlertMessage(null)}
      />

      <Text fontSize="md" mb={3} textAlign="right">
        <AppLink href="/forgot-password" text="Forgot your password?" />
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
