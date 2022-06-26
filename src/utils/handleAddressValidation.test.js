import { handleAddressValidation } from "./handleAddressValidation";

test("Address form empty validation", () => {
  const expectedResult = {
    nameError: "Name can't be Empty",
    streetError: "Street can't be Empty",
    cityError: "City can't be Empty",
    stateError: "State can't be Empty",
    countryError: "country can't be Empty",
    mobileError: "Mobile can't be Empty",
    zipcodeError: "Zipcode can't be Empty",
  };

  const result = handleAddressValidation("", "", "", "", "", "", "");
  expect(result).toStrictEqual(expectedResult);
});

test("Address form zipcode and mobile validation", () => {
  const expectedResult = {
    nameError: "",
    streetError: "",
    cityError: "",
    stateError: "",
    countryError: "",
    mobileError: "Mobile Number should be 10 digit number",
    zipcodeError: "Zipcode should be 6 digit number",
  };

  const result = handleAddressValidation(
    "Mani",
    "7th street",
    "chennai",
    "Tamil nadu",
    "india",
    "64523",
    "458762"
  );
  expect(result).toStrictEqual(expectedResult);
});

test("Address form pass validation", () => {
  const expectedResult = {
    nameError: "",
    streetError: "",
    cityError: "",
    stateError: "",
    countryError: "",
    mobileError: "",
    zipcodeError: "",
  };

  const result = handleAddressValidation(
    "Mani",
    "7th street",
    "chennai",
    "Tamil nadu",
    "india",
    "645232",
    "9875641230"
  );
  expect(result).toStrictEqual(expectedResult);
});
