import React from 'react'
import Nav from '../../pages/About/about-nav/nav';
import './AboutUs.css'
import {
    SiAudi,
    SiToyota,
    SiNissan,
    SiTesla,
    SiFord,
    SiChevrolet,
    SiFerrari,
    SiLamborghini,
    SiMclaren,
  } from "react-icons/si";
  import { CgBmw } from "react-icons/cg";
import smilingCar from '../../assets/about/joey.png'


const AboutUs_Header = () => {
const styles = {
    height: '100%',
    width: '100%',
}

    return (
    <section className=' h-screen   about-head relative'>
         <div className=" z-10 w-full md:absolute top-0">
        <Nav/>
      </div>
        <div className="pl-4 grid grid-cols-3 h-full header-grid   backdrop-blur-sm  ">
            <div className="col-span-3 md:col-span-1 mt-9 md:mt-0 ">
                
                    <div className='h-full flex flex-col justify-center items-center  '>
                        <div
                        data-aos='fade-in'
                        data-aos-delay='4000'
                        data-aos-duration='9000'
                        className="w-4/5 mx-auto  px-5 py-3 text-center md:text-start shadow-lg md:shadow-lg ">
                            <h1 className="text-4xl capitalize mb-3 w-4/5 font-extrabold">
                                we appreciate that you want to know more about us 

                            </h1>
                            
                        </div>
                    </div>
            </div>
            <div className="col-span-2 hidden md:block " data-aos='fade-left' data-aos-duration='8000'>
                <div className="flex h-full items-center">
                    <img src={smilingCar} style={styles} />

                </div>
            </div>

            <div className="col-span-3 w-full  hidden md:block   md:px-6 px-2 h-20 md:absolute bottom-0  " data-aos='fade-left'>
                <div className="flex justify-between items-center h-full  md:w-11/12 mx-auto gap-6 py-3  ">
                <SiAudi size={40} className='text-gray-500 shadow-lg' />
                <SiNissan size={40} className='text-gray-500 shadow-lg' />
                <SiToyota size={40} className='text-gray-500 shadow-lg' />
                <SiChevrolet size={40} className='text-gray-500 shadow-lg' />
                <SiFord size={40} className='text-gray-500 shadow-lg' />
                <CgBmw size={40} className='text-gray-500 shadow-lg' />
                <SiTesla size={40} className='text-gray-500 shadow-lg' />
                <SiFerrari size={40} className='text-gray-500 shadow-lg' />
                <SiLamborghini size={40} className='text-gray-500 shadow-lg' />
                <SiMclaren size={40} className='text-gray-500 shadow-lg' />
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default AboutUs_Header