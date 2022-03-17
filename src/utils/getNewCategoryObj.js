export const getNewCategoryObj = (state, action) =>
  Object.keys(state.category).reduce(
    (acc, curr) => {
      if (curr === action.payload) {
        return (acc = { ...acc, [curr]: !state.category[curr] });
      } else {
        return acc;
      }
    },
    { ...state.category }
  );
