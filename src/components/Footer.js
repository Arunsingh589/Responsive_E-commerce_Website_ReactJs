import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  // const [showReview, setShowReview] = useState(false);
  // const [review, setReview] = useState('');
  // const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // const handleReviewSubmit = (e) => {
  //   e.preventDefault();
  //   setReview('');
  //   setReviewSubmitted(true);
  //   setShowReview(false);
  // };

  return (
    <div className="bg-white text-black py-8 text-center">
      <div className="flex justify-center items-center relative">
        <div className="flex justify-center items-center gap-4 md:gap-8 mx-auto">
          <a href="https://www.instagram.com/thakur_589/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="mailto:as3945787@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={24} className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/your-facebook-id" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <FaGoogle size={24} className="hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
        <Link to={'/contact'} className="absolute hidden md:block right-16 bg-[#1aa1f5] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Contact Us
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        &copy; CopyRight @Arun Thakur | All Rights Reserved
      </p>
      {/* <div className="mt-8">
        <button onClick={() => setShowReview(!showReview)} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Leave a Review
        </button>
        {showReview && (
          <form className="mt-4 flex flex-col" onSubmit={handleReviewSubmit}>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-64 h-20 p-2 border border-gray-300 rounded-md"
              placeholder="Your review..."
            ></textarea>
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              Submit
            </button>
          </form>
        )}
        {reviewSubmitted && (
          <p className="mt-4 text-sm text-gray-600">
            Your review is submitted. Thanks!
          </p>
        )}
      </div> */}
    </div>
  );
}

export default Footer;
