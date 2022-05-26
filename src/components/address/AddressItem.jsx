const address = {
  name: "John Doe's House",
  street: "59/1, 7th cross street",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  pincode: "600028",
  phone: "999999999",
};

export const AddressItem = () => {
  return (
    <div className="address--item">
      <div className="address--actions">
        <button className="btn icon--btn">
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn icon--btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <p className="text--bold">{address.name}</p>
      <p>{address.street}</p>
      <p>{`${address.city}, ${address.state}, ${address.country} - ${address.pincode}`}</p>
      <p>{`Phone - ${address.phone}`}</p>
    </div>
  );
};
