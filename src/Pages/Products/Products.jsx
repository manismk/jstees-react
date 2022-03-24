import { Filters } from "./components/Filters";
import "../Products/products.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProductData } from "../../context/product-data-context";
import { Loader } from "../../components/Loader/Loader";

export const Products = () => {
  const { state, productLoading } = useProductData();

  return (
    <>
      {productLoading && <Loader />}
      <main>
        <h1 className="heading--2 text--center m-t-2">Featured Products</h1>
        <Filters />
        <section className="main--container">
          <h3 className="heading--4">Total Products - {state.data.length}</h3>
          {state.data.length ? (
            <div className="grid grid--4--cols">
              {state.data.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          ) : (
            <p className="result--text">No Products found</p>
          )}
        </section>
      </main>
    </>
  );
};
