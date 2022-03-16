import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "../../index.css";

export const Wishlist = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="heading--2 text--center m-t-2">My wishlist</h1>
        <div className="grid grid--4--cols m-v-2">
          {[...Array(4)].map(() => (
            <ProductCard />
          ))}
        </div>
      </main>
    </>
  );
};
