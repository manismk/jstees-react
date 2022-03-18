export const getCategoryData = (data, category) => {
  if (
    Object.values(category).every((item) => item == false) ||
    Object.values(category).every((item) => item == true)
  ) {
    return data;
  } else {
    return Object.keys(category).reduce((acc, curr) => {
      if (category[curr]) {
        return [...acc, ...data.filter((item) => item.categoryName === curr)];
      } else {
        return [...acc];
      }
    }, []);
  }
};
