import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { ReactComponent as NotFoundIcon } from "../../assets/notFound.svg";
import AppLink from "../../components/AppLink";

export default function NotFound() {
  return (
    <Box>
      <Center>
        <Flex
          w={500}
          h={300}
          p={4}
          direction="column"
          align="center"
          justify="space-between"
        >
          <NotFoundIcon width={180} height={180} />
          <Text fontSize="large" mb={3}>
            {"Oops! Looks like you are lost. "}
            <AppLink href="/home" text="Go to home." />
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}
