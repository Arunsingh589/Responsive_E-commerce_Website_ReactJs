import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import items from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from './Product';
import { IoMdStar } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';



const ProductDetails = ({ cart, setCart, likedItems, setLikedItems }) => {
  // Fetches the selected product's details based on the id from the URL using useParams.
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [relatedItem, setRelatedItem] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((item) => item.id == id)
    setItem(filterProduct[0]);


    const relatedItems = items.filter((r) => r.category == item.category);
    // console.log("RelatedProducts = ", relatedItem)
    setRelatedItem(relatedItems);
  }, [id, item.category]);



  const addToCart = (item) => {
    if (!cart.find(product => product.id === item.id)) {
      setCart([...cart, item]);

      console.log("cart element = ", cart);
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
  };

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


  return (
    <>
      <div className=' pt-10 container flex flex-col gap-8'>
        <div className="flex-end items-center mb-8">
          <Link
            to={'/'}
            className="text-blue-500 font-semibold"
          >
            Back to Shopping   &#8594;
          </Link>
        </div>
        <div className='mb-8  items-center justify-center mx-auto w-[270px] h-[270px]'>

          <img src={item.imgSrc} className=' mx-auto' alt="" />
          <div className='flex gap-2 items-center mx-auto justify-center'>
            <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white cursor-pointer'>
              < MdOutlineShoppingCart
                onClick={() => addToCart(item)}

              />

            </div>
            <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white cursor-pointer'>
              <CiHeart onClick={() => addToLikedItems(item)} />


            </div>

          </div>
        </div>

        <div className='pt-3 mx-auto'>
          <p className='md:text-center md:flex md:justify-center uppercase font-semibold md:text-[35px]'>{item.title}</p>
          <p className='text-[14px] md:text-[20px] '>{item.description}</p>

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
      </div>
      <h1 className='text-center mt-3 mb-[-55px] text-[50px] font-semibold justify-center'>Related Products</h1>
      <div className='flex justify-center items-center mt-6 '>
        <div className='flex flex-wrap justify-center  gap-4'>
          {/* Renders related products using the same Product component for consistency.
        Passes down required states as props for reusability. */}
          <Product cart={cart} setCart={setCart} items={relatedItem} likedItems={likedItems} setLikedItems={setLikedItems} />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
