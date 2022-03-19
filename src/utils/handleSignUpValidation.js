import { validateMail } from "./validateEmail";

export const handleSignUpValidation = (nameData, mailData, passwordData) => {
  let mailError = "";
  let passwordError = "";
  let nameError = "";
  if (nameData.length === 0) nameError = "Name can't be Empty";
  if (mailData.length === 0) mailError = "Email can't be Empty";
  if (mailData.length && !validateMail(mailData))
    mailError = "Invalid email format";
  if (passwordData.length === 0) passwordError = "Password can't be Empty";
  return { nameError, mailError, passwordError };
};
