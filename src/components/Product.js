import React, { useState } from 'react'
import items from './Data'
import { Link } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({ cart, setCart, items, likedItems, setLikedItems }) => {

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

  const addToLikedItems = (item) => {
    if (!likedItems.find(product => product.id === item.id)) {
      setLikedItems([...likedItems, item]);
      toast.success('🦄 Item added to Likes!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.warn('🦄 Item is already in your likes!', {
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

  const itemCount = items.length;


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

      <div className='pt-20'>
        <div className='container'>
          {(itemCount >= 8) && (
            <div className=' sm:flex justify-between items-center'>
              <div className=' text-xl md:text-4xl pb-4 md:pb-0'>Feature Products</div>
              <div className='flex text-[14px] gap-8 md:text-lg items-center'>
                <button className=' border-b border-[#000]'>Best Seller</button>
                <button>Most Popular</button>

              </div>
            </div>
          )}

          {/* Grid */}
          <div className=' pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {
              items.map((item) => {
                return (

                  <div key={item.id}>
                    <div className='border border-gray-300 p-4 cursor-pointer relative  group hover:shadow-2xl w-full h-full'>
                      <Link to={`/item/${item.id}`}>
                        <img src={item.imgSrc} alt="" />

                      </Link>

                      <div className='pt-8'>
                        <p className='text-gray-500 uppercase'>{item.title}</p>
                        <p className='text-[14px]'>{item.description}</p>

                        <div className='pt-1 flex items-center gap-2'>
                          <div className='text-[#ffc78b] text-14px flex'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />


                          </div>
                          <p className=' text-gray-500 text-[12px]'>(312,344)</p>
                        </div>
                        <h3 className=' text-primary text-xl pt-2 flex gap-1'>Rs-{item.price}</h3>


                      </div>
                      {/* Only show in Hover */}


                      <div className='w-full h-full opacity-0 top-0 left-0 transition-opacity
          group-hover:opacity-100'>
                        <div className='flex gap-2 items-center absolute left-[24%] md:left-[16%] md:top-[51%] top-[50%] translate-x-[50%]
            '>
                          <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white'>
                            < MdOutlineShoppingCart
                              onClick={() => addToCart(item)}

                            />

                          </div>
                          <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white'>
                            <CiHeart onClick={() => addToLikedItems(item)} />


                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Product
