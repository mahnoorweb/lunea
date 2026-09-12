import { Link } from "react-router-dom";
function Productcard({ product }) {
    return (
      <div className="Productcard">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Rs.{product.price.toLocaleString()}</p>
        <Link to={`/product/${product.id}`}>view Details</Link>
      </div>
    );
}
export default Productcard;
