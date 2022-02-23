import React from "react";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
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
  setAlertMessage: (alertMessage: AlertMessage | null) => void;
}

export default function Alert(props: AlertProps) {
  const { alertMessage, setAlertMessage } = props;

  if (!alertMessage || !alertMessage.message || !alertMessage.type) return null;
  return (
    <ChakraAlert status={alertMessage.type}>
      <AlertIcon />
      <AlertTitle mr={2} casing="capitalize">
        {alertMessage.type}
      </AlertTitle>
      <AlertDescription>{alertMessage.message}</AlertDescription>
      <CloseButton
        onClick={() => setAlertMessage(null)}
        position="absolute"
        right="8px"
        top="8px"
      />
    </ChakraAlert>
  );
}
