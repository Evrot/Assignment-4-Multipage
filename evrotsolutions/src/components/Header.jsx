// Header.jsx
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header({
  headerName,
  headerFirstElement,
  headerSecondElement,
  headerThirdElement,  
  cartLength
}) {
  return (
    <header className="header">
      <h2>{headerName}</h2>

      <nav>
        <Link to="/">{headerFirstElement}</Link>
        <Link to="/products">{headerSecondElement}</Link>
        <Link to="/cart">{headerThirdElement}</Link>         
      </nav>

      <Link to="/cart" className="cart-container">
        <FaCartShopping className="cart-icon" />
        {cartLength > 0 && (
          <span className="cart-count">{cartLength}</span>
        )}
      </Link>
    </header>
  );
}

export default Header;
