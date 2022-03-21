import axios from "axios";

export const getSingleProduct = async (productId) => {
  try {
    const { status, data } = await axios.get(`/api/products/${productId}`);
    if (status === 200) {
      return data.product;
    } else {
      return null;
    }
  } catch (e) {
    console.log("Error in getting single Product", e);
    return null;
  }
};
