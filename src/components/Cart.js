import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import items from './Data';
import Checkout from './Checkout';




const Cart = ({ cart, setCart, updateQuantity }) => {
    const [price, setPrice] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);

    const handlePrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => (
            totalPrice += Number(item.price) * item.amount


        ));
        setPrice(totalPrice);

    }

    useEffect(() => {
        handlePrice();
    });


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }


    // Function to handle clearing the entire cart
    const handleClearCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {cart.length === 0 ? (
                <div className="text-center">
                    <p className="text-xl md:text-4xl font-bold mb-4">Your cart is empty</p>
                    <Link to={'/'}
                        className=" bg-black  text-white py-2 px-4 rounded-lg shadow-md hover:bg-slate-950 text-sm md:text-base transform transition-all duration-300 hover:scale-105 "
                    >
                        Continue Shopping
                    </Link>
                </div>



            ) : (
                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Your Cart</h2>
                        <Link
                            to={'/'}
                            className="text-blue-500 font-semibold"
                        >
                            Back to Shopping   &#8594;
                        </Link>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            cart.map((item) => (
                                <div key={item.id}  >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                        <img src={item.imgSrc} alt={item.title} className="w-[60%]  object-cover " />
                                        <div className="p-4 flex flex-col justify-between ">
                                            <div>
                                                <p className="font-bold text-lg mb-2">{item.title}</p>
                                                <p className="text-gray-700 mb-4">{item.description}</p>

                                            </div>

                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold">Rs- {item.price}</p>


                                                <div className="flex items-center space-x-2  ">

                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="bg-gray-200 text-gray-600 py-2 px-3 rounded-full"
                                                    >
                                                        -
                                                    </button>
                                                    <span>  {item.amount}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="bg-gray-200 text-gray-600 py-2 px-3 rounded-full"
                                                    >
                                                        +
                                                    </button>


                                                </div>


                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-red-500 hover:text-red-700 ml-3.5 "
                                        >
                                            Remove
                                        </button>


                                    </div>

                                </div>

                            ))
                        }
                    </div>

                    <div className="flex justify-end mt-8">
                        <p className="text-lg font-semibold">Total: Rs-  {price || 0}</p>
                    </div>
                    {/* Clear Cart button */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                        {/* Link to checkout page */}
                        <Link
                            to="/checkout"
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-700" >
                            <button onClick={() => handleCheckout()}> Checkout</button>


                        </Link>
                        <Checkout cart={cart} price={price} setCart={setCart} />


                    </div>




                </section>
            )
            }


        </div>
    )
}

export default Cart
