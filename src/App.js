import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import items from './components/Data';
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
import { HashLoader } from "react-spinners";
import Login from "./components/Routes/Login";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [likedItems, setLikedItems] = useState(() => {
    return JSON.parse(localStorage.getItem("likedItems")) || [];
  });

  const [data, setData] = useState([...items]);
  const [discount, setDiscount] = useState([...items2]);
  const [showHero, setShowHero] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isUserLoginVisible, setUserLoginVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const updateQuantity = (id, value = 1) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount + value;
        return {
          ...item,
          amount: newAmount > 1 ? newAmount : 1,
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
    <Router>
      {loading ? (
        <div className='loader-container bg-gray-100'>
          <p>E-Commerce Website</p>
          <HashLoader className='loader' color={'#86BC42'} loading={loading} size={70} />
        </div>
      ) : (
        <>
          <Navbar size={cart.length} like={likedItems.length} setData={setData} setShowHero={setShowHero} />
          <Routes>
            <Route path="/" element={
              <>
                {showHero && <><Hero /><Service /></>}
                <Product cart={cart} setCart={setCart} items={data} likedItems={likedItems} setLikedItems={setLikedItems} />
                {showHero && <Discount cart={cart} setCart={setCart} items={discount} likedItems={likedItems} setLikedItems={setLikedItems} />}
                {showHero && <NewsLetter />}
                {showHero && <Footer />}
              </>
            } />
            <Route path="/item/:id" element={<ProductDetails cart={cart} setCart={setCart} likedItems={likedItems} setLikedItems={setLikedItems} />} />
            <Route path="/search/:term" element={<SearchTerm cart={cart} setCart={setCart} likedItems={likedItems} setLikedItems={setLikedItems} />} />
            {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} />} /> */}
            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} />
              </ProtectedRoute>
            } />


            {/* <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} /> */}
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout cart={cart} setCart={setCart} />
              </ProtectedRoute>
            } />

            <Route path="/login" element={<Login setUserLoginVisible={setUserLoginVisible} />} />
            <Route path="/like" element={
              <ProtectedRoute>
                <Like likedItems={likedItems} removeFromLikes={removeFromLikes} cart={cart} setCart={setCart} />
              </ProtectedRoute>
            } />
            {/* <Route path="/like" element={<Like likedItems={likedItems} removeFromLikes={removeFromLikes} cart={cart} setCart={setCart} />} /> */}
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
