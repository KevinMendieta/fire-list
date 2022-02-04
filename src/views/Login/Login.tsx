import React from "react";
import { Box, Center } from "@chakra-ui/react";

import { LoginForm } from "../../components/Login";

export default function Login() {
  return (
    <Box>
      <Center>
        <Box w={500} p={4}>
          <LoginForm />
        </Box>
      </Center>
    </Box>
  );
}
