import React from "react";
import { Box, Center, Heading, Button } from "@chakra-ui/react";
import { useLocation } from "wouter";

import { useAuth } from "../../hooks";

export default function Home() {
  const [requestInProgress, setRequestInProgress] = React.useState(false);

  const { logout } = useAuth();
  const location = useLocation();
  const setLocation = location[1];

  const handleLogout = async () => {
    if (!logout) return;
    setRequestInProgress(true);
    try {
      await logout();
      setLocation("/login");
    } catch (error) {
      console.error(error);
      setRequestInProgress(false);
    }
  };
  return (
    <Center w="100%" h="100%" justifyContent="center" alignItems="center">
      <Box w={500} h={200}>
        <Center
          w="100%"
          h="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          border="1px"
          borderColor="gray.200"
          p={6}
        >
          <Heading as="h2">Hey There! 🔥</Heading>
          <Button
            w="100%"
            isDisabled={requestInProgress}
            isLoading={requestInProgress}
            backgroundColor="#0c2d48"
            color="white"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
