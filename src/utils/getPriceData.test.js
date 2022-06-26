import { getPriceData } from "./getPriceData";

test("Should return products with price less than or equal to send value", () => {
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
  ];
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
      _id: 2,
      title: "Black Pullover Hoodies",
      make: "Js Fashion",
      actualPrice: "1200",
      discountedPrice: "400",
      categoryName: "pullover-hoodies",
      imgSrc: "/assets/black-pullover-hoodies.jpg",
      rating: "2",
    },
  ];
  const result = getPriceData(data, 500);
  expect(result).toStrictEqual(expectedResult);
});
