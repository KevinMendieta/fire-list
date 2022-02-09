import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { useLocation } from "wouter";

import { LoginForm } from "../../components/Login";
import { useSearchParams } from "../../hooks";

export default function Login() {
  const [location, setLocation] = useLocation();
  const { match, params } = useSearchParams(location);

  const handleSuccessLogin = () => {
    if (match && params && params.redirectTo) {
      setLocation(params.redirectTo);
      return;
    }

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
