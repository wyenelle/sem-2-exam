import React from 'react'
import './Footer.css'
const Footer = ({text}) => {
  
  return (
    <footer className='footer bg-black '>
        <div className="footer-bg  h-full">
            <div className="footer-text bg-black/70 h-full text-white flex flex-col justify-center items-center gap-4 ">
                <h1 className="footer-header text-center capitalize text-4xl font-extrabold w-7/12 mx-auto">
                   {text}
                </h1>
                <div className="capitalize mt-4 bg-red-500 border border-red-500 p-3 rounded-md text-white font-bold">
                    try us now
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer