import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import items from './Data';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaRegHeart } from "react-icons/fa";
import { LuUserCircle2 } from 'react-icons/lu';

const Navbar = ({ size, setData, setShowHero, like }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState(false);

    const filterByCategory = (category) => {
        const element = items.filter((item) => item.category === category);
        setData(element);
        setShowHero(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
    };

    return (
        <nav className='sticky top-0 left-0 z-10 border-primaryDark dark:bg-primaryDark m-0 p-0'>
            <div className='bg-white md:bg-primaryDark'>
                <div className='container py-3 items-center hidden justify-between md:flex'>
                    <div className='flex items-center gap-8'>
                        <Link to={'/'} className='md:text-white text-[40px] cursor-pointer'>E-Cart</Link>
                        <form onSubmit={handleSubmit} className='relative'>
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type="text"
                                placeholder='Search term...'
                                className='px-4 py-3 rounded-lg w-[300px]'
                            />
                        </form>
                    </div>

                    <div className='flex text-white text-[26px] gap-6'>
                        <Link to={'/login'} className='relative cursor-pointer'>
                            <LuUserCircle2 />
                        </Link>
                        <Link to={'/cart'} className='relative cursor-pointer'>
                            <FiShoppingCart />
                            <div className='w-[20px] h-[20px] bg-red-500 rounded-full absolute text-[12px] text-white place-items-center grid top-[15px] right-[-10px]'>
                                {size}
                            </div>
                        </Link>
                        <Link to={'/like'} className='relative cursor-pointer'>
                            <FaRegHeart />
                            <div className='w-[20px] h-[20px] bg-red-500 rounded-full absolute text-[12px] text-white place-items-center grid top-[15px] right-[-10px]'>
                                {like}
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className='container flex justify-between items-center text-[22px] py-4 md:hidden'>
                    <ul className={`duration-300 md:hidden w-full h-screen text-white py-16 overflow-y-scroll fixed bg-black top-[65px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                        <li onClick={() => setData(items, setShowHero(true))} className='p-5'>All Products</li>
                        <li onClick={() => filterByCategory('mb protines')} className='p-5'>MB Proteins</li>
                        <li onClick={() => filterByCategory('hf protines')} className='p-5'>HF Proteins</li>
                        <li onClick={() => filterByCategory('mobiles')} className='p-5'>Mobiles</li>
                        <li onClick={() => filterByCategory('laptops')} className='p-5'>Laptops</li>
                        <li onClick={() => filterByCategory('Earbuds')} className='p-5'>Earbuds</li>
                    </ul>
                    {
                        toggle ?
                            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
                            :
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
                    }
                    <Link to={'/'}>E-Cart</Link>
                    <div className='flex justify-between items-center gap-3'>
                        <Link to={'/login'} className='relative cursor-pointer'>
                            <LuUserCircle2 />
                        </Link>
                        <Link to={'/cart'} className='relative flex gap-3 items-center'>
                            <FiShoppingCart />
                            <div className='w-[20px] h-[20px] bg-red-500 rounded-full absolute text-[12px] text-white place-items-center grid top-[15px] right-[-10px]'>
                                {size}
                            </div>
                        </Link>
                        <Link to={'/like'} className='relative cursor-pointer'>
                            <FaRegHeart />
                            <div className='w-[20px] h-[20px] bg-red-500 rounded-full font-semibold absolute text-[12px] text-white place-items-center grid top-[15px] right-[-10px]'>
                                {like}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {
                location.pathname === '/' && (
                    <div className='bg-primary hidden md:block cursor-pointer'>
                        <ul className='container flex justify-between py-4 uppercase text-white'>
                            <li onClick={() => setData(items, setShowHero(true))}>All Products</li>
                            <li onClick={() => filterByCategory('mb protines')}>MB Protein</li>
                            <li onClick={() => filterByCategory('hf protines')}>HF Protein</li>
                            <li onClick={() => filterByCategory('tablets')}>Tablets</li>
                            <li onClick={() => filterByCategory('mobiles')}>Mobiles</li>
                            <li onClick={() => filterByCategory('laptops')}>Laptops</li>
                            <li onClick={() => filterByCategory('Earbuds')}>Earbuds</li>
                        </ul>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
