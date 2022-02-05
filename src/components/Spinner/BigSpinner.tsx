import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export default function BigSpinner() {
  return (
    <Flex justify="center" align="center" p="4">
      <Spinner color="#0c2d48" thickness="4px" size="lg" />
    </Flex>
  );
}
