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

import PasswordInput from "../PasswordInput";

export default function LoginForm() {
  return (
    <form>
      <Heading as="h2" mb={3}>
        🔥 Join Fire List Today! 🔥
      </Heading>

      <Text fontSize="md" mb={3}>
        {"Let's get started."}
      </Text>

      <FormControl isRequired mb={3}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" backgroundColor="white" />
      </FormControl>

      <FormControl isRequired mb={3}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <PasswordInput />
      </FormControl>

      <Button
        type="submit"
        color="white"
        backgroundColor="blue.500"
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
        <Link href="/login">
          <AppLink color="blue.500" fontSize="md">
            Log in.
          </AppLink>
        </Link>
      </Text>
    </form>
  );
}
