import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,
  Icon,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

interface PasswordInputProps {
  register: UseFormRegister<FieldValues>;
}

export default function PasswordInput(props: PasswordInputProps) {
  const { register } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          backgroundColor="white"
          placeholder="Enter your password"
          {...register("password", { required: true })}
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
    </>
  );
}
