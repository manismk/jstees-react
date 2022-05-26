export const AddressItem = ({ address }) => {
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
      <p>{`Phone - ${address.mobile}`}</p>
    </div>
  );
};
