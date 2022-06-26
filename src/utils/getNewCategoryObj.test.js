import { getNewCategoryObj } from "./getNewCategoryObj";

const data = {
  category: {
    "normal-tees": false,
    "full-sleeve-tees": false,
    "pullover-hoodies": false,
    "crewneck-hoodies": false,
  },
};

test("should toogle the value for the send category", () => {
  const expectedResult = {
    "normal-tees": false,
    "full-sleeve-tees": false,
    "pullover-hoodies": true,
    "crewneck-hoodies": false,
  };
  const result = getNewCategoryObj(data, { payload: "pullover-hoodies" });

  expect(result).toStrictEqual(expectedResult);
});
