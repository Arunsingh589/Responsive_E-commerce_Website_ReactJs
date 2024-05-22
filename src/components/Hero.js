import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' sm:min-h-[25vh] sm:h-[45vh] sm:max-h-[50vh] '>
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
            <img src="/hero.png" alt="" className="h-[70%] object-cover" />
        </div>
        <div className='container py-8 sm:py-0 sm:flex items-center justify-between h-full'>
            <div className='flex items-center h-full '>
                <div>
                    <p className='uppercase text-primary font-bold'>visit our shop</p>
                    <h2 className='text-primaryDark font-bold text-[24px] sm:text-[30px]
                    md:text-[40px] lg:text-[48px] pb-8 leading-tight
                    '>All Product Will There
                      <br />
                      <span className='text-primary'>EVERYDAY</span>
                    </h2>
                    <Link to={'/Discover'} className=' border-b border-black'>Discover More</Link>
                </div>

            </div>
            
            <div className=''>
                <img   src="/remove.png"  alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default Hero
