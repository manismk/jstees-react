import { Navbar } from "../../components/Navbar/Navbar";
import { Filters } from "./components/Filters";
import "../Products/products.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProductData } from "../../context/product-data-context";

export const Products = () => {
  const { state } = useProductData();

  return (
    <>
      <Navbar />
      <main>
        <h1 className="heading--2 text--center m-t-2">Featured Products</h1>
        <Filters />
        <section className="main--container">
          <p>Total Products - {state.data.length}</p>
          {state.data.length ? (
            <div className="grid grid--4--cols">
              {state.data.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          ) : (
            "No product found"
          )}
        </section>
      </main>
    </>
  );
};
