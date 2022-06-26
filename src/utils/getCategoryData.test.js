import { getCategoryData } from "./getCategoryData";

const data = [
  {
    _id: 1,
    title: "Black Normal Tees",
    make: "Js Fashion",
    actualPrice: "900",
    discountedPrice: "500",
    categoryName: "normal-tees",
    imgSrc: "/assets/black-normal-tees.jpg",
    rating: "3",
  },
  {
    _id: 2,
    title: "Black Pullover Hoodies",
    make: "Js Fashion",
    actualPrice: "1200",
    discountedPrice: "400",
    categoryName: "pullover-hoodies",
    imgSrc: "/assets/black-pullover-hoodies.jpg",
    rating: "2",
  },
  {
    _id: 3,
    title: "Black Crewneck Hoodies",
    make: "Js Fashion",
    actualPrice: "1250",
    discountedPrice: "900",
    categoryName: "crewneck-hoodies",
    imgSrc: "/assets/black-crewneck-hoodies.jpg",
    rating: "1",
  },
  {
    _id: 4,
    title: "Black Full Sleeve Tees",
    make: "Js Fashion",
    actualPrice: "900",
    discountedPrice: "650",
    categoryName: "full-sleeve-tees",
    imgSrc: "/assets/black-full-sleeve-tees.jpg",
    rating: "4",
  },
];

test("Should return all products when all category is false", () => {
  const expectedResult = [...data];

  const result = getCategoryData(data, {
    "normal-tees": false,
    "full-sleeve-tees": false,
    "pullover-hoodies": false,
    "crewneck-hoodies": false,
  });

  expect(result).toStrictEqual(expectedResult);
});
test("Should return all products when all category is true", () => {
  const expectedResult = [...data];

  const result = getCategoryData(data, {
    "normal-tees": true,
    "full-sleeve-tees": true,
    "pullover-hoodies": true,
    "crewneck-hoodies": true,
  });

  expect(result).toStrictEqual(expectedResult);
});

test("Should return products for which category is true", () => {
  const expectedResult = [
    {
      _id: 2,
      title: "Black Pullover Hoodies",
      make: "Js Fashion",
      actualPrice: "1200",
      discountedPrice: "400",
      categoryName: "pullover-hoodies",
      imgSrc: "/assets/black-pullover-hoodies.jpg",
      rating: "2",
    },
    {
      _id: 4,
      title: "Black Full Sleeve Tees",
      make: "Js Fashion",
      actualPrice: "900",
      discountedPrice: "650",
      categoryName: "full-sleeve-tees",
      imgSrc: "/assets/black-full-sleeve-tees.jpg",
      rating: "4",
    },
  ];

  const result = getCategoryData(data, {
    "normal-tees": false,
    "pullover-hoodies": true,
    "full-sleeve-tees": true,
    "crewneck-hoodies": false,
  });

  expect(result).toStrictEqual(expectedResult);
});
