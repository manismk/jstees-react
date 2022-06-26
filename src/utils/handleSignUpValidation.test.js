import { handleSignUpValidation } from "./";

test("Sign up form empty validation", () => {
  const expectedResult = {
    firstNameError: "First name can't be Empty",
    lastNameError: "Last name can't be Empty",
    mailError: "Email can't be Empty",
    passwordError: "Password can't be Empty",
    confirmPasswordError: "Confirm Password can't be Empty",
  };

  const result = handleSignUpValidation("", "", "", "", "", "", "");
  expect(result).toStrictEqual(expectedResult);
});

test("Sign up form mail, password and confirm password validation", () => {
  const expectedResult = {
    firstNameError: "",
    lastNameError: "",
    mailError: "Invalid email format",
    passwordError:
      "Password should contain at least 8 characters, 1 letter and 1 number",
    confirmPasswordError: "Password and Confirm Password should be same",
  };

  const result = handleSignUpValidation(
    "Mani",
    "kandan",
    "mani",
    "mani",
    "54959"
  );
  expect(result).toStrictEqual(expectedResult);
});

test("Sign up form pass validation", () => {
  const expectedResult = {
    firstNameError: "",
    lastNameError: "",
    mailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };
  const result = handleSignUpValidation(
    "Mani",
    "kandan",
    "mani@gmail.com",
    "mani1234",
    "mani1234"
  );
  expect(result).toStrictEqual(expectedResult);
});
