import { Link } from "react-router-dom";

export const SearchItem = ({ item, closeSearch }) => {
  return (
    <Link
      to={`/products/single/${item._id}`}
      onClick={closeSearch}
      className="search--item"
    >
      <p>{item.title}</p>
      <img alt="" src={process.env.PUBLIC_URL + item.imgSrc} />
    </Link>
  );
};
