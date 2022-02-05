import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "wouter";

interface AppLinkProps {
  href: string;
  text: string;
}

export default function AppLink(props: AppLinkProps) {
  const { href, text } = props;
  return (
    <Link href={href}>
      <ChakraLink color="blue.500" fontSize="md">
        {text}
      </ChakraLink>
    </Link>
  );
}
