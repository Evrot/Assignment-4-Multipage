import CartItem from "../components/CartItem";
import './CartPage.css';

function CartPage({ products, removeFromCart }) {

  // Helper to parse prices
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace("$", "").replace(/\./g, "").replace(",", "."));
  };

  // Total calculation
  const total = products.reduce((sum, item) => sum + parsePrice(item.productPrice), 0);

  return (
    <div className="cart-page">
      <main className="cart-main">
        <h2>Shopping Cart</h2>

        {products.length === 0 ? (
          <p className="empty-cart">Your cart is empty!</p>
        ) : (
          <>
            <div className="cart-items">
              {products.map((item, index) => (
                <CartItem
                  key={index}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  removeButton="Remove"
                  onRemove={() => removeFromCart(index)}
                />
              ))}
            </div>

            <h3 className="cart-total">
              Total: $
              {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </h3>
          </>
        )}
      </main>
    </div>
  );
}

export default CartPage;
