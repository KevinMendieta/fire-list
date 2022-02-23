import v8n from "v8n";

const EMAIL_PATTERN =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export function validateEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export function validatePassword(password: string): boolean {
  return v8n()
    .string()
    .minLength(8)
    .some.uppercase()
    .some.lowercase()
    .some.numeric()
    .some.test(password);
}
