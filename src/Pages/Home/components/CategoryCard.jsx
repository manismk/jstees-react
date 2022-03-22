import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category--image"
      onClick={() => {
        navigate(`/products/${category.categoryName}`);
      }}
    >
      <img
        className="img--res"
        src={
          process.env.PUBLIC_URL + `/assets/maroon-${category.categoryName}.jpg`
        }
        alt=""
      />
      <p className="category--name">{category.labelName}</p>
    </div>
  );
};
