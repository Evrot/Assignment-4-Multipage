import Header from './components/Header.jsx';
import './App.css';

import cardImageone from "./assets/aetherion.jpg";
import cardImagetwo from "./assets/cryostea.jpg";
import cardImagethree from "./assets/pyronox.jpg";
import cardImagefour from "./assets/verdantia.jpg";
import cardImagefive from "./assets/nebulon.jpg";
import cardImagesix from "./assets/obsidara.jpg";
import Footer from './components/Footer.jsx';
import CartItem from './components/CartItem.jsx';
import { useState, useEffect } from 'react';
import './components/CartModal.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";



// App.jsx
function App() {

  // Cart
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  // Add an Item
  const addsToCart = (product) => {
    setCart([...cart, product]);
  }

 
  // Converting to use reduce()
  const parsePrice = (priceString) => {  
    return parseFloat(priceString.replace("$", "").replace(/\./g, "").replace(",", "."));
  };

  // Delete an Item
 const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
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
  <BrowserRouter>
    <div className="app">
      <Header
          headerName="Space Store"
          headerFirstElement="Home"
          headerSecondElement="Products"
          headerThirdElement="Cart"          
          cartLength={cart.length}
          toggleCart={() => setIsCartOpen(!isCartOpen)}
          />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addsToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              products={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
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
  </BrowserRouter>    
  );
}

export default App;