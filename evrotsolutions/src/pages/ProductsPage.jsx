import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="container">
      <h2>Packages Available</h2>

      <div className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productButton={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;
