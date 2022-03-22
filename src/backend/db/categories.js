import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "normal-tees",
    labelName: "Normal Tees",
  },
  {
    _id: uuid(),
    categoryName: "full-sleeve-tees",
    labelName: "Full Sleeve Tees",
  },
  {
    _id: uuid(),
    categoryName: "pullover-hoodies",
    labelName: "Pullover Hoodies",
  },
  {
    _id: uuid(),
    categoryName: "crewneck-hoodies",
    labelName: "Crewneck Hoodies",
  },
];
