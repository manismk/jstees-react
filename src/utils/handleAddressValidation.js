export const handleAddressValidation = (
  name,
  street,
  city,
  state,
  country,
  zipcode,
  mobile
) => {
  let nameError,
    streetError,
    cityError,
    stateError,
    countryError,
    zipcodeError,
    mobileError;

  nameError =
    streetError =
    cityError =
    stateError =
    countryError =
    zipcodeError =
    mobileError =
      "";
  if (name.length === 0) nameError = "Name can't be Empty";
  if (street.length === 0) streetError = "Street can't be Empty";
  if (city.length === 0) cityError = "City can't be Empty";
  if (state.length === 0) stateError = "State can't be Empty";
  if (country.length === 0) countryError = "country can't be Empty";
  if (zipcode.length === 0) zipcodeError = "Zipcode can't be Empty";
  if (mobile.length === 0) mobileError = "Mobile can't be Empty";

  if (zipcode.length && zipcode.length !== 6)
    zipcodeError = "Zipcode should be 6 digit number";
  if (mobile.length && mobile.length !== 10)
    mobileError = "Mobile Number should be 10 digit number";

  return {
    nameError,
    streetError,
    cityError,
    stateError,
    countryError,
    zipcodeError,
    mobileError,
  };
};
