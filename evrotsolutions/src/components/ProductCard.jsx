// ProductCard.jsx
import './ProductCard.css';

function ProductCard({productImage, productName, productDescription, productPrice, productButton}) {
    return (
        <div className="product-card">
            <div className="card-header">
                <img src={productImage} alt="Product Image" className="product-image"/>                
                <h3 className="productname">{productName}</h3>                
                <span className="productdescription">{productDescription}</span>
                <p className="productprice">{productPrice}</p>
                <button className="productbutton" onClick={productButton}>Add to Cart!</button>
            </div>
        </div>        
    );
}

export default ProductCard;