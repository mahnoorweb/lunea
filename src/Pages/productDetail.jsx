import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../contect/CartContext";

function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/womensDress.json")
      .then((res) => res.json())

      .then((data) => {
        console.log("All Products:", data.dresses);

        const selectedProduct = data.dresses.find(
          (item) => item.id === Number(id),
        );

        console.log("Selected Product:", selectedProduct);

        setProduct(selectedProduct);

        setLoading(false);
      })

      .catch((error) => {
        console.log("Error:", error);

        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading Product...</h2>;
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>

        <Link to="/products">Back To Shop</Link>
      </div>
    );
  }

  return (
    <main className="product-detail-page">
      {/* Detail Hero */}
      <section className="detail-hero">
        <p>LUNÉA COLLECTION</p>

        <h1>PRODUCT DETAILS</h1>
      </section>

      <section className="product-detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>

          <h2>{product.name}</h2>

          <h3>{product.price}</h3>

          <p className="detail-description">{product.description}</p>

          <p>✨ Premium Quality</p>

          <p>🚚 Fast Delivery</p>

          <p>↩️ Easy Exchange</p>

          <button
            className="add-cart-btn"
            onClick={() => {
              addToCart(product);

              navigate("/cart");
            }}
          >
            Add To Cart
          </button>

          <Link to="/products" className="back-btn">
            ← Back To Shop
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
