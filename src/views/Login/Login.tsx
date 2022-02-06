import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { useLocation } from "wouter";

import { LoginForm } from "../../components/Login";

export default function Login() {
  const location = useLocation();
  const setLocation = location[1];

  const handleSuccessLogin = () => {
    setLocation("/home");
  };
  return (
    <Box>
      <Center>
        <Box w={500} p={4}>
          <LoginForm onSuccessLogin={handleSuccessLogin} />
        </Box>
      </Center>
    </Box>
  );
}
