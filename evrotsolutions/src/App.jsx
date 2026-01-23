import ProductCard from './components/ProductCard.jsx';
import Header from './components/Header.jsx';
import './App.css';
import Hero from './components/Hero.jsx';
import heroBImage from "./assets/hero_image2.png";
import cardImageone from "./assets/aetherion.jpg";
import cardImagetwo from "./assets/cryostea.jpg";
import cardImagethree from "./assets/pyronox.jpg";
import cardImagefour from "./assets/verdantia.jpg";
import cardImagefive from "./assets/nebulon.jpg";
import cardImagesix from "./assets/obsidara.jpg";
import Footer from './components/Footer.jsx';
import CartItem from './components/CartItem.jsx';
import { useState } from 'react';
import './components/CartModal.css';

// App.jsx
function App() {

  // Cart
  const [cart, setCart] = useState([]);

  // Add an Item
  const addsToCart = (product) => {
    setCart([...cart, product]);
  }

  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Converting to use reduce()
  const parsePrice = (priceString) => {  
    return parseFloat(priceString.replace("$", "").replace(/\./g, "").replace(",", "."));
  };

  // Delete an Item
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  // List of products
  const products = [
  {
    id: 1,
    productName: "Aetherion",
    productImage: cardImageone,
    productPrice: "$2.999,99",
    productDescription:
      "A glowing planet wrapped in violet clouds, known for its floating crystal islands and low gravity skies."
  },
  {
    id: 2,
    productName: "Cryostea",
    productImage: cardImagetwo,
    productPrice: "$1.599,99",
    productDescription:
      "An icy planet with shimmering frozen oceans and blue auroras that light up the night sky."
  },
  {
    id: 3,
    productName: "Pyronox",
    productImage: cardImagethree,
    productPrice: "$1.784,99",
    productDescription:
      "A volcanic world of fire rivers and obsidian mountains, where travelers witness eternal lava storms."
  },
  
  {
    id: 4,
    productName: "Verdantia",
    productImage: cardImagefour,
    productPrice: "$1.299,99",
    productDescription:
      "A lush jungle planet overflowing with bioluminescent plants and massive alien trees."
  },
  {
    id: 5,
    productName: "Nebulon",
    productImage: cardImagefive,
    productPrice: "$2.199,99",
    productDescription:
      "A gas giant with swirling neon storms and floating research stations suspended in its atmosphere."
  },
  {
    id: 6,
    productName: "Obsidara",
    productImage: cardImagesix,
    productPrice: "$1.999,99",
    productDescription:
      "A dark crystalline planet where black glass deserts reflect distant stars."
  }
];

  return (
    <div className="app">
      <Header
          headerName="Space Store"
          headerFirstElement="Home"
          headerSecondElement="Products"
          headerThirdElement="About"
          headerFourthElement="Contact"
          cartLength={cart.length}
          toggleCart={() => setIsCartOpen(!isCartOpen)}
        />
      <Hero
          heroTitle="Welcome to Space"
          heroSlogan="This is the place where you will have experiences from another world!"
          heroImage={heroBImage}
          heroButton="Travel Now!"
        />
      <main className="container">
        <h2>Packages Available</h2>
        <div className='cards'>
          {products.map((product) => (
            <ProductCard
            key={product.id}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productButton={() => addsToCart(product)}
            />            
          ))}        
        </div>

        <div className="cart-items">
          {(
            cart.map((item, index) => (
              <CartItem
                key={index}
                productName={item.productName}
                productPrice={item.productPrice}
                removeButton="Remove"
                onRemove={() => removeFromCart(item)}
              />
            ))
          )}
      </div>
      </main>

      {isCartOpen && (
          <div className="cart-modal-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Shopping Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <CartItem
                      key={index}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      removeButton="Remove"
                      onRemove={() => removeFromCart(item)}
                    />
                  ))}                  
                  <h3>
                    Total: $
                    {cart
                      .reduce((sum, item) => sum + parsePrice(item.productPrice), 0)
                      .toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </h3>
                </>
              )}
              <button onClick={() => setIsCartOpen(false)}>Close</button>
            </div>
          </div>
        )}

      <Footer
         footerTitle="Space Store"
         footerEmail="Email: spacestore@nasa.com"
         footerNumber="Phone: (314) 267-2020"
         footerAddress="Address: 1 Pharmacy Pl, St.Louis, MO."
         footerButtonOne="About"
         footerButtonTwo="Contact"
         footerButtonThree="Privacy Policy"
         footerButtonFour="Terms of Service"
      />
    </div>
  );
}

export default App;