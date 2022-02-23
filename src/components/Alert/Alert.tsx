import React from "react";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Text,
} from "@chakra-ui/react";

export enum AlertTypeEnum {
  Error = "error",
  Success = "success",
  Warning = "warning",
  Info = "info",
}

export interface AlertMessage {
  type: AlertTypeEnum;
  message: string;
}

interface AlertProps {
  alertMessage: AlertMessage | null;
  onDismiss: () => void;
}

export default function Alert(props: AlertProps) {
  const { alertMessage, onDismiss } = props;

  if (!alertMessage || !alertMessage.message || !alertMessage.type) return null;
  return (
    <ChakraAlert mb={3} status={alertMessage.type}>
      <AlertIcon />
      <AlertTitle mr={2}>
        <Text casing="capitalize">{`${alertMessage.type}:`}</Text>
      </AlertTitle>
      <AlertDescription>{alertMessage.message}</AlertDescription>
      <CloseButton
        onClick={onDismiss}
        position="absolute"
        right="8px"
        top="8px"
      />
    </ChakraAlert>
  );
}
