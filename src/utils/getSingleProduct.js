import axios from "axios";
import { toast } from "react-toastify";

export const getSingleProduct = async (productId) => {
  try {
    const { status, data } = await axios.get(`/api/products/${productId}`);
    if (status === 200 && data.product !== null) {
      return data.product;
    } else {
      toast.error("Something Went wrong", { autoClose: false });
      return null;
    }
  } catch (e) {
    toast.error("Something Went wrong", { autoClose: false });
    console.log("Error in getting single Product", e);
    return null;
  }
};
