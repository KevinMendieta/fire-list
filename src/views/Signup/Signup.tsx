import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { useLocation } from "wouter";

import { SignupForm } from "../../components/Signup";

export default function Signup() {
  const [, setLocation] = useLocation();

  const handleSuccessSignup = () => {
    setLocation("/home");
  };
  return (
    <Box>
      <Center>
        <Box w={500} p={4}>
          <SignupForm onSuccessSignup={handleSuccessSignup} />
        </Box>
      </Center>
    </Box>
  );
}
