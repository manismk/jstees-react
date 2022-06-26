import { handleLoginValidation } from "./handleLoginValidation";

test("Login form empty validation", () => {
  const expectedResult = {
    mailError: "Email can't be Empty",
    passwordError: "Password can't be Empty",
  };

  const result = handleLoginValidation("", "");
  expect(result).toStrictEqual(expectedResult);
});

test("Login form email validation", () => {
  const expectedResult = {
    mailError: "Invalid email format",
    passwordError: "",
  };

  const result = handleLoginValidation("Mani", "2134");
  expect(result).toStrictEqual(expectedResult);
});

test("Login form pass validation", () => {
  const expectedResult = {
    mailError: "",
    passwordError: "",
  };

  const result = handleLoginValidation("mani@gmail.com", "5857654");
  expect(result).toStrictEqual(expectedResult);
});
