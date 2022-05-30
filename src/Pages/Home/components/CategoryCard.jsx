import { useNavigate } from "react-router-dom";

const colors = { 1: "black", 2: "blue", 3: "green", 4: "maroon" };

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category--image"
      onClick={() => {
        navigate(`/products?category=${category.categoryName}`);
      }}
    >
      <img
        className="img--res"
        src={
          process.env.PUBLIC_URL +
          `/assets/${colors[Math.floor(Math.random() * 4) + 1]}-${
            category.categoryName
          }.jpg`
        }
        alt=""
      />
      <p className="category--name">{category.labelName}</p>
    </div>
  );
};
