import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <br />
      {console.log("Products rendering")}

      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </>
  );
};

export default Products;
