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
                        <button className="btn-31"
                            onClick={handleClearCart}
                        >
                            <span className="text-container">
                                <span className="text">Clear Cart</span>
                            </span>
                        </button>
                        {/* Link to checkout page */}
                        <Link to={'/checkout'} className="btnwallet">
                            <button className="button"
                                onClick={() => handleCheckout()}
                            >
                                <span className="button__text">
                                    Checkout</span>
                                <svg className="button__svg" role="presentational" viewBox="0 0 600 600">
                                    <defs>
                                        <clipPath id="myClip">
                                            <rect x="0" y="0" width="100%" height="50%" />
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#myClip)">
                                        <g id="money">
                                            <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                            <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                        </g>
                                        <g id="creditcard">
                                            <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                            <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
                                            <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                                        </g>
                                    </g>
                                    <g id="wallet">
                                        <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                        <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                        <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" strokeMiterlimit="10" strokeWidth="14" />
                                        <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
                                        <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
                                    </g>
                                </svg>

                            </button>
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
