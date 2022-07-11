import React from "react";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "wouter";

import { ReactComponent as NotFoundIcon } from "../../assets/notFound.svg";
import AppLink from "../../components/AppLink";

export default function NotFound() {
  const [location] = useLocation();
  return (
    <Box>
      <Center>
        <Flex
          w={500}
          h={400}
          p={4}
          direction="column"
          align="center"
          justify="space-between"
        >
          <Heading as="h2">{`Unknown route ${location}`}</Heading>
          <NotFoundIcon width={200} height={200} />
          <Text fontSize="large">
            {"Oops! Looks like you are lost. "}
            <AppLink href="/home" text="Go to home." />
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}
