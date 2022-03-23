import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useWishlist } from "../../context";
import "../../index.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="heading--2 text--center m-t-2">My wishlist</h1>
        {wishlist.length ? (
          <div className="grid grid--4--cols m-v-2">
            {wishlist.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                wishListed={true}
              />
            ))}
          </div>
        ) : (
          <p className="result--text text--center m-v-2">
            No Items Wiishlisted
          </p>
        )}
      </main>
    </>
  );
};
