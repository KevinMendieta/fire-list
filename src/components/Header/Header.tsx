import React from "react";
import { Center, Flex, Heading } from "@chakra-ui/react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Center p={3}>
        <Heading as="h1" size="2xl" color="white">
          <Flex align="center" justify="center">
            <Logo /> Fire List
          </Flex>
        </Heading>
      </Center>
    </header>
  );
}
