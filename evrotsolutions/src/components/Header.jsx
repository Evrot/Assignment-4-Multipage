// Header.jsx
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";


function Header({headerName, headerFirstElement, headerSecondElement, headerThirdElement, headerFourthElement, cartLength, toggleCart}) {
  
  return (
    <header className="header">
      <h2>{headerName}</h2>
      <nav>
        <button>{headerFirstElement}</button>
        <button>{headerSecondElement}</button>
        <button>{headerThirdElement}</button>
        <button>{headerFourthElement}</button>
      </nav>
      <div className="cart-container" onClick={toggleCart}> 
        <FaCartShopping className="cart-icon"/>
        {cartLength > 0 && <span className="cart-count">{cartLength} </span>  
        }         
      </div>     
    </header>
  );
}



export default Header;