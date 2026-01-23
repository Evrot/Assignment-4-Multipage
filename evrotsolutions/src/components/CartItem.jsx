// CartItem.jsx
import "./CartItem.css";

function CartItem({productName, productPrice, removeButton, onRemove}) {
    return (
        <div className="cart-item">
            <h3>{productName}</h3>
            <span>{productPrice}</span>
            <button className="remove-button" onClick={onRemove}>
                {removeButton}
            </button>
        </div>
    );
}

export default CartItem;