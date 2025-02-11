import React, { useState, useRef, useEffect } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserLoginVisible }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleLoginSubmit = () => {
        setEmailError("");
        setPasswordError("");

        if (!email.trim()) {
            setEmailError("Email is required");
            setTimeout(() => setEmailError(""), 3000);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Invalid email format");
            setTimeout(() => setEmailError(""), 3000);
            return;
        }

        if (!password.trim()) {
            setPasswordError("Password is required");
            setTimeout(() => setPasswordError(""), 3000);
            return;
        }

        if (password.length < 8) {
            setPasswordError("Password should be at least 8 characters long");
            setTimeout(() => setPasswordError(""), 3000);
            return;
        }

        localStorage.setItem("email", email);
        setIsLoggedIn(true);

        console.log("Email:", email);
        setEmail("");
        setPassword("");
        setUserLoginVisible(false);
        setSignupSuccess(true);
        setTimeout(() => setSignupSuccess(false), 2000);

        navigate("/");
    };

    const handleLogout = () => {
        localStorage.removeItem("email");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 rounded-lg shadow-lg p-8 bg-white dark:bg-primaryDark">
                <p className="text-center font-bold text-3xl mb-8">{isLoggedIn ? "Welcome" : "Sign in"}</p>
                {isLoggedIn ? (
                    <div className="text-center">
                        <p className="mb-4">You are logged in as <strong>{localStorage.getItem("email")}</strong></p>
                        <button
                            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                            {selectedImage ? (
                                <div className="relative cursor-pointer" onClick={() => fileInputRef.current.click()}>
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Selected"
                                        className="w-[48px] h-[48px] rounded-full"
                                    />
                                </div>
                            ) : (
                                <div className="relative cursor-pointer" onClick={() => fileInputRef.current.click()}>
                                    <LuUserCircle2 className="w-[48px] h-[48px]" />
                                </div>
                            )}
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                        {selectedImage && (
                            <div className="flex justify-between gap-2">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                >
                                    Remove Image
                                </button>
                                <button
                                    onClick={() => fileInputRef.current.click()}
                                    className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                >
                                    Change Image
                                </button>
                            </div>
                        )}
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                            type="text"
                            placeholder="Email"
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
                )}
            </div>
            {signupSuccess && (
                <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 shadow-lg">
                    You are successfully signed up!
                </div>
            )}
        </div>
    );
};

export default Login;
