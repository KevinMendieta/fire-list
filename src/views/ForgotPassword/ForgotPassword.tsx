import React from "react";
import { Box, Center } from "@chakra-ui/react";

import { ForgotPasswordForm } from "../../components/ForgotPassword";

export default function ForgotPassword() {
  return (
    <Box>
      <Center>
        <Box w={500} p={4}>
          <ForgotPasswordForm />
        </Box>
      </Center>
    </Box>
  );
}
