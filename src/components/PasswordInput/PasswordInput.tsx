import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <InputGroup>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        backgroundColor="white"
      />
      <InputRightElement width="4rem">
        <Button
          h="1.75rem"
          size="sm"
          bgColor="#0c2d48"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon color="white" as={showPassword ? FaEye : FaEyeSlash} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
