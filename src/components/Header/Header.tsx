import React from "react";
import { Center, Heading } from "@chakra-ui/react";

import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Center p={3}>
        <Heading as="h1" size="2xl" color="white">
          🔥 Fire List!
        </Heading>
      </Center>
    </header>
  );
}
