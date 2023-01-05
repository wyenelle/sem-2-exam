import React from 'react'
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
import smilingCar from '../../assets/cars/smiling-car.png'


const AboutUs_Header = () => {
const styles = {
    height: '80%',
    width: '100%',
}

    return (
    <section className='pl-4 h-screen'>
        <div className="grid grid-cols-3 h-full">
            <div className="col-span-3 md:col-span-1">
                
                    <div className='h-full flex flex-col justify-center items-center  w-full'>
                        <div className="w-3/5 mx-auto  px-5 py-3 text-center md:text-start shadow-lg md:shadow-none ">
                            <h1 className="text-4xl capitalize mb-3 w-4/5 font-extrabold">
                                know more about us
                            </h1>
                            <h3 className="font-bold my-4 text-xl w-4/5">
                                with offers like no other
                            </h3>
                        </div>
                    </div>
            </div>
            <div className="col-span-2 hidden md:block ">
                <div className="flex h-full items-center">
                    <img src={smilingCar} style={styles} />

                </div>
            </div>

            <div className="col-span-3 w-full     px-6  h-20">
                <div className="flex justify-between items-center w-11/12 mx-auto gap-6 py-3">
                <SiAudi size={40} className='text-gray-400 shadow-lg' />
                <SiNissan size={40} className='text-gray-400 shadow-lg' />
                <SiToyota size={40} className='text-gray-400 shadow-lg' />
                <SiChevrolet size={40} className='text-gray-400 shadow-lg' />
                <SiFord size={40} className='text-gray-400 shadow-lg' />
                <CgBmw size={40} className='text-gray-400 shadow-lg' />
                <SiTesla size={40} className='text-gray-400 shadow-lg' />
                <SiFerrari size={40} className='text-gray-400 shadow-lg' />
                <SiLamborghini size={40} className='text-gray-400 shadow-lg' />
                <SiMclaren size={40} className='text-gray-400 shadow-lg' />
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default AboutUs_Header