import { Navbar } from "../../components/Navbar/Navbar";
import { bannerOptimized } from "../../assets/index";
import "../Home/home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="banner">
            <Link to="products">
              <img
                src={bannerOptimized}
                alt="jsTees banner"
                className="img--res"
              />
            </Link>
          </div>
          <h2 className="heading--3 text--center m-b-2">Tees Category</h2>
          <div className="category--container grid grid--4--cols m-b-2">
            <div className="category--image">
              <img
                className="img--res"
                src={process.env.PUBLIC_URL + "/assets/black-normal-tees.jpg"}
                alt=""
              />
              <p className="category--name">Normal Tees</p>
            </div>
            <div className="category--image">
              <img
                className="img--res"
                src={
                  process.env.PUBLIC_URL + "/assets/black-full-sleeve-tees.jpg"
                }
                alt=""
              />
              <p className="category--name">Full Sleeve Tees</p>
            </div>

            <div className="category--image">
              <img
                className="img--res"
                src={
                  process.env.PUBLIC_URL + "/assets/black-pullover-hoodies.jpg"
                }
                alt=""
              />
              <p className="category--name">Pullover Hoodie</p>
            </div>
            <div className="category--image">
              <img
                className="img--res"
                src={
                  process.env.PUBLIC_URL + "/assets/black-crewneck-hoodies.jpg"
                }
                alt=""
              />
              <p className="category--name">Crewneck Hoodie</p>
            </div>
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
    </>
  );
};
