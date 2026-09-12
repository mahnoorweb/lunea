import products from "../Data/Product";
import Productcard from "../Component/ProductCard";
function Products() {
  return (
    <main>
      <section className="Page-hero">
        <p>LUNÉA COLLECTION</p>
        <h1>ALL PRODUCTS</h1>
        <p>Discover our beautiful collection of dresses.</p>
      </section>

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
