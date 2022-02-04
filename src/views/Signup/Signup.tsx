import React from "react";
import { Box, Center } from "@chakra-ui/react";

import { SignupForm } from "../../components/Signup";

export default function Signup() {
  return (
    <Box>
      <Center>
        <Box w={500} p={4}>
          <SignupForm />
        </Box>
      </Center>
    </Box>
  );
}
