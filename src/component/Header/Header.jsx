import React from 'react'
import Navbar from '../navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <header className='header w-full h-screen  '>
        <div className=" flex flex-col   w-full sub-header h-screen">
            <div className="header-nav  w-full">
            <Navbar />
            </div>

            <div className="header-text flex flex-col gap-4 justify-center items-center h-80 m-auto w-11/12  text-center text-white p-4  ">
                <h1 className='text-5xl  font-extrabold'>
                    Welcome to AutoZone 
                </h1>

                <h3 className='text-3xl m-4  font-bold capitalize'>
                    Auto dealer & car rental service 
                </h3>
            </div>

        </div>
    </header>
  )
}

export default Header