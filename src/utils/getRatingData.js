export const getRatingData = (data, rating) => {
  return data.filter((item) => Number(item.rating) >= Number(rating));
};
