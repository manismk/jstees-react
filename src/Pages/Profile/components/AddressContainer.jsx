import { AddressItem } from "../../../components/";

export const AddressContainer = () => {
  return (
    <div className="address--wrapper">
      <AddressItem />
      <AddressItem />
      <div className="text--center">
        <button className="btn btn--primary">Add Address</button>
      </div>
    </div>
  );
};
