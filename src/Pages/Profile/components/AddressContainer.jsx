import { AddressItem } from "../../../components/";
import { useAddress } from "../../../context";

export const AddressContainer = () => {
  const { userAddress, openModal } = useAddress();
  return (
    <div className="address--wrapper">
      {userAddress.length > 0 ? (
        userAddress.map((address) => <AddressItem address={address} />)
      ) : (
        <p className="text--center m-v-1">No Saved address Found</p>
      )}
      <div className="text--center">
        <button className="btn btn--primary" onClick={() => openModal()}>
          Add Address
        </button>
      </div>
    </div>
  );
};
