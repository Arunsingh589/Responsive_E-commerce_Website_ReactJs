import React, { useRef, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { LuUserCircle2 } from 'react-icons/lu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import items from './Data'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { FaRegHeart } from "react-icons/fa";

const Navbar = ({ size, setData, setShowHero, like }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showContactDetails, setShowContactDetails] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState(items);
    const [userLoginVisible, setUserLoginVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);




    const filterByCategory = (category) => {
        const element = items.filter((item) => item.category === category)
        // console.log(element);

        setData(element);
        setShowHero(false);
    };

    const handleUserCircleClick = () => {

        setUserLoginVisible(true);
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }

    };
    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };


    const handleLoginSubmit = () => {

        if (email.trim() === '') {
            setEmailError('Email is required');
            setTimeout(() => {
                setEmailError(" ")
            }, 3000)
            return;

        } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(email)) {
            setEmailError('Email must contain at least one letter, one number, and one symbol');
            setTimeout(() => {
                setEmailError(" ")
            }, 3000)
            return;
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            setTimeout(() => {
                setPasswordError(" ")
            }, 3000)
            return;
        } else if (password.length < 8) {
            setPasswordError('Password should be at least 8 characters long');
            setTimeout(() => {
                setPasswordError(" ")
            }, 3000)
            return;
        }

        // if (!emailError && !passwordError) {
        console.log("Email:", email, "Password:", password);


        setEmail('');
        setPassword('');
        setUserLoginVisible(false);
        setSignupSuccess(true);
        setEmailError('');
        setPasswordError('');


        setTimeout(() => {
            setSignupSuccess(false);
        }, 2000);
    };







    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")


    }

    return (
        <nav className=' sticky top-0 left-0 z-10  border-primaryDark dark:bg-primaryDark m-0 p-0'>
            <div className=' bg-white  md:bg-primaryDark'>


                {/* User Login Section */}
                {userLoginVisible && (
                    <div className="flex justify-center items-center h-screen">

                        <div className="w-96 rounded-lg shadow-lg p-8 bg-white dark:bg-primaryDark">
                            <p className="text-center font-bold text-3xl mb-8">Sign in</p>
                            <div className="space-y-4"

                            >
                                {/* Conditionally render image selection section */}
                                {selectedImage === null && (
                                    <div className="flex justify-center mb-4">
                                        <div className="relative cursor-pointer" onClick={() => fileInputRef.current.click()}>
                                            <LuUserCircle2 className=' w-[48px] h-[48px]' />
                                        </div>
                                    </div>
                                )}
                                {/* Hidden file input element */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    className='hidden'
                                />

                                {/* Render selected image if available */}
                                {selectedImage && (
                                    <div className="flex justify-center mb-4">
                                        <div className="relative cursor-pointer">
                                            <LuUserCircle2 className=' w-[48px] h-[48px]' />
                                            <img
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="Selected"
                                                className="absolute top-0 left-0 w-full h-full rounded-full "
                                            />
                                        </div>
                                    </div>
                                )}


                                {selectedImage && (
                                    <div className="flex justify-between gap-2">
                                        <button
                                            onClick={() => setSelectedImage(null)} // Clear selected image
                                            className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                        >
                                            Remove Image
                                        </button>
                                        <button
                                            onClick={() => fileInputRef.current.click()} // Open file input to change image
                                            className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                        >
                                            Change Image
                                        </button>
                                    </div>

                                )}
                                {/* Render email and password fields */}


                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                                    type="text"
                                    placeholder="Username"
                                />
                                {emailError && <p className="text-red-500">{emailError}</p>}

                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                                    type="password"
                                    placeholder="Password"
                                />
                                {passwordError && <p className="text-red-500">{passwordError}</p>}

                                <button
                                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                    type="submit"
                                    onClick={handleLoginSubmit}

                                >
                                    Sign in
                                </button>
                                <p className="text-center">
                                    <a className="text-purple-500" href="#">
                                        Forgot Password?
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {signupSuccess && (
                    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 shadow-lg">
                        You are successfully signed up!
                    </div>
                )}

                <div className=' container py-3 items-center hidden justify-between md:flex'>
                    <div className=' flex items-center gap-8'>
                        <Link to={'/'} className='md:text-white text-[40px] cursor-pointer'>E-Cart</Link>
                        <form onSubmit={handleSubmit} className=' relative'>
                            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search trem....' className='px-4 py-3 rounded-lg w-[300px]' />
                        </form>
                    </div>
                    <div className='flex text-white text-[26px] gap-6'>

                        <div className='relative cursor-pointer' onClick={handleUserCircleClick}>
                            <LuUserCircle2 className='' />
                            {selectedImage && (
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Selected"
                                    className="absolute top-0 left-0 w-full h-full rounded-full border border-yellow-400  hover:scale-125 "
                                />
                            )}

                        </div>
                        <div>
                            <Link to={'/cart'} className=' relative cursor-pointer'>
                                <FiShoppingCart />
                                <div className=' w-[20px] h-[20px] bg-red-500 rounded-full absolute
                 text-[12px] text-white place-items-center grid top-[15px] right-[-10px] '>{size}</div>

                            </Link>
                        </div>
                        <div>
                            <Link to={'/like'} className=' relative cursor-pointer'>

                                <FaRegHeart />
                                <div className=' w-[20px] h-[20px] bg-red-500 rounded-full absolute
                 text-[12px] text-white place-items-center grid top-[15px] right-[-10px] '>{like}</div>

                            </Link>
                        </div>




                    </div>
                </div>
                {/* Visible in mobile */}
                <div className=' container flex justify-between items-center text-[22px] py-4 md:hidden'>
                    <ul className={`duration-300 md:hidden w-full h-screen text-white py-16  overflow-y-scroll   fixed bg-black top-[65px]
                   ${toggle ? 'left-[0]' : 'left-[-100%]'}
                   `}>

                        <li onClick={() => setData(items, setShowHero(true))} className='p-5 '>All Products</li>
                        <li onClick={() => filterByCategory('mb protines')} className='p-5'>MB Protines</li>
                        <li onClick={() => filterByCategory('hf protines')} className='p-5 '>HF Protines</li>
                        <li onClick={() => filterByCategory('gnc protines')} className='p-5'>GNC Protines</li>
                        <Link to={'/contact'} className='p-5'>Contact</Link>

                        {/* <li onClick={() => setShowContactDetails(!showContactDetails)} className='p-5'>Contact</li> */}
                        {/* {showContactDetails && (
                            <div className="px-5">
                                <div className="border border-gray-300 p-4 mb-4">
                                    <p className="text-blue-500">Mobile: <span className="text-yellow-500">9773674997</span></p>
                                    <p className="text-blue-500">Email: <span className="text-yellow-500">Arun@test.com</span></p>
                                    <p className="text-blue-500">Facebook: <span className="text-yellow-500">facebook.com</span></p>
                                    <p className="text-blue-500">Guidelines:</p>
                                    <p className="text-yellow-500">If any problem come in a product that you purchased from our site, it can be replaced within 15 days. After 15 days, no products will be replaced or refunded.</p>
                                </div>
                            </div>
                        )} */}
                        <div >



                        </div>


                    </ul>
                    {
                        toggle ?
                            <AiOutlineClose onClick={(() => setToggle(!toggle))}
                                className='text-black text-2xl md:hidden block' />

                            :

                            <AiOutlineMenu onClick={(() => setToggle(!toggle))}
                                className='text-black text-2xl md:hidden block' />
                    }
                    <Link to={'/'}>E-Cart</Link>

                    <div className=' flex justify-between items-center gap-3'>
                        <Link to={'/cart'} className=' relative flex gap-3 items-center'>
                            <div className='relative cursor-pointer' onClick={handleUserCircleClick}>
                                <LuUserCircle2 className='' />
                                {selectedImage && (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Selected"
                                        className="absolute top-0 left-0 w-full h-full rounded-full border border-yellow-400  hover:scale-125"
                                    />
                                )}
                            </div>
                            <FiShoppingCart />
                            <div className=' w-[20px] h-[20px] bg-red-500 rounded-full absolute
                 text-[12px] text-white place-items-center grid top-[15px] right-[-10px] '>{size}</div>



                        </Link>
                        <Link to={'/like'} className=' relative cursor-pointer'>

                            <FaRegHeart />
                            <div className=' w-[20px] h-[20px] bg-red-500 rounded-full font-semibold absolute
                                    text-[12px] text-white place-items-center grid top-[15px] right-[-10px] '>{like}</div>

                        </Link>
                    </div>

                </div>
            </div>
            {
                location.pathname === '/' && (
                    <div className='bg-primary hidden md:block cursor-pointer '>
                        <ul className='container flex justify-between py-4 uppercase text-white '>

                            <li onClick={() => setData(items, setShowHero(true))}>All Products</li>
                            <li onClick={() => filterByCategory('mb protines')}  >MB Protine</li>
                            <li onClick={() => filterByCategory('hf protines')} >HF Protine</li>
                            <li onClick={() => filterByCategory('tablets')} >Tablets</li>
                            <li onClick={() => filterByCategory('mobiles')} >Mobiles</li>
                            <li onClick={() => filterByCategory('laptops')}>Laptops</li>
                            <li onClick={() => filterByCategory('gnc protines')} >GNC Protine</li>



                        </ul>

                    </div>

                )
            }
        </nav>
    )
}

export default Navbar
