import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { calculateDiscount, getSingleProduct } from "../../utils";
import "./singleProduct.css";
import {
  CartButton,
  CloseButton,
  WishListButton,
} from "../../components/ProductCard/components";
import { useCart, useWishlist } from "../../context";
import { Loader } from "../../components/Loader/Loader";

export const SingleProduct = () => {
  const params = useParams();
  const { wishlist } = useWishlist();
  const { cartList } = useCart();
  const navigate = useNavigate();

  const [data, setData] = useState({
    product: {},
    cartListed: false,
    wishListed: false,
    isLoading: false,
  });

  useEffect(() => {
    setData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      const product = await getSingleProduct(params.productId);
      setData((prev) => ({ ...prev, product: product, isLoading: false }));
    })();
  }, [params]);

  useEffect(() => {
    cartList.find((item) => item._id === data.product._id)
      ? setData((prev) => ({ ...prev, cartListed: true }))
      : setData((prev) => ({ ...prev, cartListed: false }));
    wishlist.find((item) => item._id === data.product._id)
      ? setData((prev) => ({ ...prev, wishListed: true }))
      : setData((prev) => ({ ...prev, wishListed: false }));
  }, [data.product, wishlist]);

  return (
    <>
      <main>
        {data.product === null ? (
          <></>
        ) : (
          <section className="container grid grid--2--cols single--prod--container">
            <div className="product--image--container card--badge">
              <img
                className="img--res"
                src={process.env.PUBLIC_URL + data.product.imgSrc}
                alt="T-shirt"
              />

              {data.wishListed ? (
                <CloseButton product={data.product} />
              ) : (
                <WishListButton product={data.product} />
              )}
            </div>
            <div className="product--content">
              <div className="product--header">
                <h1 className="heading--3">{data.product.title}</h1>
                <div className="card--manufacturer">{data.product.make}</div>
                <div className="card--review--container">
                  <div className="card--review--star">
                    {data.product.rating}
                    <i className="fas fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="card--review--number">(256)</div>
                </div>
                <div className="card--price--container">
                  <div className="actual--price">
                    ₹{data.product.discountedPrice}
                  </div>
                  <div className="strike--price">
                    ₹{data.product.actualPrice}
                  </div>
                  <div className="offer--percentage">
                    (
                    {calculateDiscount(
                      data.product.actualPrice,
                      data.product.discountedPrice
                    )}
                    %off)
                  </div>
                </div>
              </div>
              <div className="product--description">
                <h3 className="heading--5 text--grey">Product Details</h3>
                <p>
                  Classic fit, 100% combed cotton (heathers 15% viscose),
                  shoulder to shoulder tape, double needle hems, preshrunk to
                  minimize shrinkage
                </p>
                <h3 className="heading--5 text--grey">Material Details</h3>
                <p>100% Cotton - Heathers 85% Cotton, 15% Viscose</p>
                <h3 className="heading--5 text--grey">Delivery Details</h3>

                <ul className="list">
                  <li>Shipping cost calculated at checkout</li>
                  <li>Delivered within 7 days</li>
                  <li>Shipping throughout India</li>
                </ul>

                <h3 className="heading--5 text--grey">Return Details</h3>
                <p>7 day return policy</p>
              </div>
              {data.cartListed ? (
                <button
                  className="btn btn--primary w-100 "
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Go to cart
                </button>
              ) : (
                <CartButton product={data.product} />
              )}
            </div>
          </section>
        )}
      </main>
      {data.isLoading && <Loader />}
    </>
  );
};
