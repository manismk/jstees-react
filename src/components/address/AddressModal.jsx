import { useState } from "react";
import { handleAddressValidation } from "../../utils";
import { InputTextBox } from "../Input/InputTextBox";
import "./addressModal.css";

export const AddressModal = () => {
  const [addressData, setAddressData] = useState({
    name: "",
    nameError: "",
    street: "",
    streetError: "",
    city: "",
    cityError: "",
    state: "",
    stateError: "",
    country: "",
    countryError: "",
    zipcode: "",
    zipcodeError: "",
    mobile: "",
    mobileError: "",
  });

  const clickHandler = () => {
    const {
      nameError,
      streetError,
      cityError,
      stateError,
      countryError,
      zipcodeError,
      mobileError,
    } = handleAddressValidation(
      addressData.name,
      addressData.street,
      addressData.city,
      addressData.state,
      addressData.country,
      addressData.zipcode,
      addressData.mobile
    );

    setAddressData((prev) => ({
      ...prev,
      nameError,
      stateError,
      countryError,
      cityError,
      streetError,
      zipcodeError,
      mobileError,
    }));
  };
  return (
    <>
      <div className="modal modal--alert modal--address ">
        <h5 className="modal--heading heading--4 text--center">Add address</h5>
        <InputTextBox
          error={addressData.nameError}
          labelName={"Name"}
          id={"name"}
          placeHolder="John Doe"
          changeHandler={(e) => {
            setAddressData((prevData) => ({
              ...prevData,
              name: e.target.value,
              nameError: "",
            }));
          }}
          type="text"
          value={addressData.name}
        />
        <InputTextBox
          error={addressData.streetError}
          labelName={"Street"}
          id={"street"}
          placeHolder="40/12, Ab colony, 6th street"
          changeHandler={(e) => {
            setAddressData((prevData) => ({
              ...prevData,
              street: e.target.value,
              streetError: "",
            }));
          }}
          type="text"
          value={addressData.street}
        />
        <div className="flex-2">
          <InputTextBox
            error={addressData.cityError}
            labelName={"City"}
            id={"city"}
            placeHolder="Chennai"
            changeHandler={(e) => {
              setAddressData((prevData) => ({
                ...prevData,
                city: e.target.value,
                cityError: "",
              }));
            }}
            type="text"
            value={addressData.city}
          />
          <InputTextBox
            error={addressData.stateError}
            labelName={"State"}
            id={"state"}
            placeHolder="Tamil Nadu"
            changeHandler={(e) => {
              setAddressData((prevData) => ({
                ...prevData,
                state: e.target.value,
                stateError: "",
              }));
            }}
            type="text"
            value={addressData.state}
          />
        </div>
        <div className="flex-2">
          <InputTextBox
            error={addressData.countryError}
            labelName={"Country"}
            id={"country"}
            placeHolder="India"
            changeHandler={(e) => {
              setAddressData((prevData) => ({
                ...prevData,
                country: e.target.value,
                countryError: "",
              }));
            }}
            type="text"
            value={addressData.country}
          />
          <InputTextBox
            error={addressData.zipcodeError}
            labelName={"Zipcode"}
            id={"zipcode"}
            placeHolder="123456"
            changeHandler={(e) => {
              setAddressData((prevData) => ({
                ...prevData,
                zipcode: e.target.value,
                zipcodeError: "",
              }));
            }}
            type="number"
            value={addressData.zipcode}
          />
        </div>

        <InputTextBox
          error={addressData.mobileError}
          labelName={"Mobile"}
          id={"mobile"}
          placeHolder="9875643210"
          changeHandler={(e) => {
            setAddressData((prevData) => ({
              ...prevData,
              mobile: e.target.value,
              mobileError: "",
            }));
          }}
          type="text"
          value={addressData.mobile}
        />
        <div className="text--center">
          <button className="btn btn--primary" onClick={clickHandler}>
            Add Address
          </button>
        </div>
      </div>
      <div className="overlay  overlay--top"></div>
    </>
  );
};
