import { Navbar } from "../../components/Navbar/Navbar";
import { Filters } from "./Filters";
import "../Products/products.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Products = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="heading--2 text--center m-t-2">Featured Products</h1>
        <Filters />
        <section className="main--container">
          <div className="grid grid--4--cols">
            {[...Array(8)].map(() => (
              <ProductCard />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
