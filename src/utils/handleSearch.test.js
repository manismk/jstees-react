import { handleSearch } from "./handleSearch";

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

test("Should return products with given string", () => {
  const expectedResult = [
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

  const result = handleSearch(data, { payload: "tees" });
  expect(result).toStrictEqual(expectedResult);
});

test("Should return empty array when given string is not there", () => {
  const expectedResult = [];

  const result = handleSearch(data, { payload: "tested" });
  expect(result).toStrictEqual(expectedResult);
});
