import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import items from './components/Data'
import Hero from "./components/Hero";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import SearchTerm from "./components/SearchTerm";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Service from "./components/Service";
import Discount from "./components/Discount";
import items2 from "./components/Data2";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Like from "./components/Like";
function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([...items]);
  const [discount, setDiscount] = useState([...items2])
  const [showHero, setShowHero] = useState(true);
  const [likedItems, setLikedItems] = useState([]);








  const updateQuantity = (id, value = 1) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount + value;
        return {
          ...item,
          amount: newAmount > 1 ? newAmount : 1 // Ensures the count doesn't go below 1
        };
      }
      return item;
    });

    setCart(updatedCart);
  };
  const removeFromLikes = (item) => {
    setLikedItems(likedItems.filter(likedItem => likedItem.id !== item.id));
  };


  return (
    <>
      <Router >
        <Navbar size={cart.length} like={likedItems.length} setData={setData} setShowHero={setShowHero} />
        <Routes >
          {/* Route with Hero component */}
          <Route
            path="/"
            element={
              <>
                {showHero &&
                  <>
                    <Hero />
                    <Service />
                  </>
                }
                <Product cart={cart} setCart={setCart} items={data} likedItems={likedItems} setLikedItems={setLikedItems} />
                {showHero && <Discount cart={cart} setCart={setCart} items={discount} likedItems={likedItems} setLikedItems={setLikedItems} />}
                {showHero && <NewsLetter />}
                {showHero && <Footer />}

              </>
            }
          />
          {/* Other routes */}
          <Route path="/item/:id" element={<ProductDetails cart={cart} setCart={setCart} likedItems={likedItems} setLikedItems={setLikedItems} />} />
          <Route path="/search/:term" element={<SearchTerm cart={cart} setCart={setCart} likedItems={likedItems} setLikedItems={setLikedItems} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path="/like" element={<Like likedItems={likedItems} removeFromLikes={removeFromLikes} cart={cart} setCart={setCart} />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
