import React from "react";
import {
  FieldValues,
  FormState,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,
  Icon,
  Input,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { validatePassword } from "../../../helpers/validationHelpers";

interface PasswordInputProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  checkFormat?: boolean;
}

export default function PasswordInput(props: PasswordInputProps) {
  const {
    register,
    formState: { errors },
    checkFormat = false,
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const getValidations = (): RegisterOptions => {
    const validations: RegisterOptions = {
      required: true,
    };
    if (checkFormat) {
      validations.validate = (value) => validatePassword(value);
    }
    return validations;
  };
  return (
    <>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          backgroundColor="white"
          placeholder="Enter your password"
          {...register("password", getValidations())}
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
      {errors.password && (
        <FormHelperText color="red">
          {errors.password.type === "required"
            ? "Email is required."
            : "Password must be at least 8 characters long and contain at least 1 uppercase, lowercase and numeric character."}
        </FormHelperText>
      )}
    </>
  );
}
