import React, { useState, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to the server)
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    useEffect(() => {
        const handleScroll = (event) => {
            // Scroll handling logic here (if needed)
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="text-gray-600 body-font relative">
            <Link to={'/'} className="flex font-semibold text-indigo-600 mt-5 ml-5 text-sm items-center">
                Continue Shopping
                <FaLongArrowAltRight className="w-4 h-4 ml-2" />
            </Link>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.689695677482!2d86.17389577418591!3d23.68705247871366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4218a078e5d3d%3A0xe30f0dd8e378ecde!2sBokaro%20Steel%20City%20College!5e0!3m2!1sen!2sin!4v1720711387396!5m2!1sen!2sin"
                        width="100%" height="100%"
                        className='absolute inset-0'
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">123 Your Business Address, City, State, ZIP</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">contact@shoppify.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">We would love to hear from you! Please fill out the form below and we will get in touch with you as soon as possible.</p>
                    {formSubmitted && <p className="text-green-500 text-sm mb-4">Your request has been sent.</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Submit
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">We respect your privacy. Your information will not be shared.</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
