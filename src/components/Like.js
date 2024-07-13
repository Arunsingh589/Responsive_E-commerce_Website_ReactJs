import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdOutlineShoppingCart } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Like = ({ likedItems, removeFromLikes, cart, setCart }) => {
  const addToCart = (item) => {

    if (!cart.find(product => product.id === item.id)) {
      setCart([...cart, item]);
      // console.log("cart element = ", cart);
      toast.success('🦄 Item added on Cart!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
    else {
      toast.warn('🦄 Item is already added to your cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    }
  }
  return (
    <>
      <div className="text-[10px] md:text-[15px] ">
        <ToastContainer
          className={"w-[240px] md:w-[300px]  "}
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
      </div>
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Liked Items</h2>
        {likedItems.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between border-b border-gray-300 pb-4 mb-4">
                <p className="font-semibold">Product</p>
                <p className="font-semibold">Price</p>
              </div>
              {likedItems.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
                  <img src={item.imgSrc} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <p className="ml-auto font-semibold">Rs-{item.price}</p>
                  <div onClick={() => addToCart(item)} className=' py-2 ml-4 px-2  text-[20px] cursor-pointer hover:scale-125 transition-transform'>
                    < MdOutlineShoppingCart />
                  </div>
                  <div
                    onClick={() => removeFromLikes(item)}
                    className="ml-4  text-red-500 font-bold py-2  text-[20px] cursor-pointer hover:scale-125 transition-transform "
                  >
                    <MdDelete />
                  </div>

                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No items liked yet.</p>
        )}
        <Link to={'/'} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default Like;
