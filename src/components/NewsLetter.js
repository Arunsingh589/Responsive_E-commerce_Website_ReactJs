import { useState } from "react"
import { LuMailOpen } from "react-icons/lu"
const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const subscribe = () => {
        if (email.trim() === '') {
            setErrorMessage('Email is required');
            setTimeout(() => {
                setErrorMessage(" ")
            }, 3000)
            return;
        } else if (email.trim().length < 8) {
            setErrorMessage('Email must be at least 8 characters long');
            setTimeout(() => {
                setErrorMessage(" ")
            }, 3000)
            return;
        }
        else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(email)) {
            setErrorMessage('Email must contain at least one letter, one number, and one symbol');
            setTimeout(() => {
                setErrorMessage(" ")
            }, 3000)
            return;
        }
        // Perform subscription logic here (e.g., send email to server)
        setShowToast(true);
        setEmail(" ");

        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Hide the toast after 3 seconds
    };
    
    
    return (
        <div className=" bg-primaryDark mt-4">
            <div className=" container py-8 flex flex-col md:flex-row justify-between
           items-center gap-4 text-white">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen className="text-[60px]" />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            Sign Up to our Newsletters
                        </h3>
                        <p>...and receive $30 coupon for first shopping</p>
                    </div>
                </div>

                <div className="w-full max-w-[500px] relative">
               
                    <input
                        className="py-4 px-6 w-full rounded-full text-black"
                        type="text"
                        value={email}
                        placeholder="Your Email Address..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                   
                 

                    <button className=" bg-primaryDark absolute top-[50%]
                 right-2 translate-y-[-50%] py-2 px-4
                  rounded-full hover:bg-accent"
                    onClick={ subscribe}
                  >
                        Subscribe
                    </button>
                    
                </div>
            </div>
            {showToast && (
                <div className="bg-green-500 text-white text-center py-2">
                    Your subscription has been added!
                </div>
            )}
              {errorMessage && (
                        <p className="text-red-500 relative left-[5%] text-[10px] sm:text-[10px] sm:left-[50%]  xl:text-[15px] md:left-[57%] lg:left-[52%] xl:left-[67%] bottom-7" >{errorMessage}</p>
                    )}
             
        </div>
    )
}

export default NewsLetter
