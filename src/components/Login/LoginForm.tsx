import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as AppLink,
  Text,
} from "@chakra-ui/react";
import { Link } from "wouter";

export default function LoginForm() {
  return (
    <form>
      <Heading as="h2" mb={3}>
        Welcome back! 🔥
      </Heading>
      <Text fontSize="md" mb={3}>
        {"First time here? "}
        <Link href="/signup">
          <AppLink color="blue.500" fontSize="md">
            Signup.
          </AppLink>
        </Link>
      </Text>

      <FormControl isRequired mb={3}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" backgroundColor="white" />
      </FormControl>

      <FormControl isRequired mb={3}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" backgroundColor="white" />
      </FormControl>

      <Text fontSize="md" mb={3} textAlign="right">
        Forgot your password?
      </Text>

      <Button
        type="submit"
        color="white"
        backgroundColor="blue.500"
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
