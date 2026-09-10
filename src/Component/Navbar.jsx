import { Link } from "react-router-dom";


function Navbar() {
    return (
      <header className="Navbar">
        <div className="logo">LUNÉA</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/cart">Cart 🛒</Link>
        </nav>
      </header>
    );

    
}
export default Navbar;