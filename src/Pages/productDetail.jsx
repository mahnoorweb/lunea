import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../Data/Product";
import { useCart } from "../contect/CartContext";

function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

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

          <h3>Rs. {product.price.toLocaleString()}</h3>

          <p className="detail-description">
            Discover the elegance of {product.name}. This beautiful LUNÉA design
            is perfect for creating a graceful and stylish look.
          </p>

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
