import { useState, useEffect } from "react";
import Productcard from "../Component/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/womensDress.json")
      .then((res) => res.json())

      .then((data) => {
        console.log("Products Data:", data);

        setProducts(data.dresses);
      })

      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className="Page-hero">
        <p>LUNÉA COLLECTION</p>

        <h1>ALL PRODUCTS</h1>

        <p>Discover our beautiful collection of dresses.</p>
      </section>

      {/* Products Section */}
      <section className="product-section">
        <h2>Our Collection</h2>

        <div className="product-cards">
          {products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
