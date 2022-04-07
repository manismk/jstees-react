import "../Home/home.css";

import { Link } from "react-router-dom";
import { useProductData } from "../../context";
import { CategoryCard } from "./components/CategoryCard";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const { productDataState, productLoading } = useProductData();

  return (
    <>
      <main>
        <div className="container">
          <div className="banner">
            <Link to="products">
              <img
                src={`${process.env.PUBLIC_URL}/assets/bannerOptimized.jpg`}
                alt="jsTees banner"
                className="img--res"
              />
            </Link>
          </div>
          <h2 className="heading--3 text--center m-b-2">Tees Category</h2>
          <div className="category--container grid grid--4--cols m-b-2">
            {productDataState.categories.length
              ? productDataState.categories.map((category) => (
                  <CategoryCard category={category} key={category._id} />
                ))
              : "Loading..."}
          </div>
          <div className="action--container m-b-2 m-h-2">
            <Link
              to="/products"
              className="btn btn--primary btn--center text--center"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
      {productLoading && <Loader />}
    </>
  );
};
