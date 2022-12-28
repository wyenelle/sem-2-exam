import React from 'react'
import './Awesome.css'
import {FaToolbox,FaCalendarAlt, FaPhone, FaAccessibleIcon, FaGlobe, FaClone, FaTools, FaEye} from 'react-icons/fa'
const Awesome = () => {
  return (
    <section className=' mb-4'>
        <div className="text-center my-6 p-5 ">
            <h1 className='text-3xl font-extrabold my-2'>Awesome Core Features</h1>
            <p className='my-1 font-bold'> We are top notch in terms of services rendered </p>
            <p className=' font-bold'>We have gained the confidence of our customers and would strive to serve them better</p>
        </div>
        <div className="awesome-list">
            <div className="grid grid-cols-3 mx-auto w-11/12">
                <div className="w-9/12 mx-auto col-span-4 md:col-span-1 ">
                    <div className="grid grid-rows-4">
                        <div className="row-span-3 number flex flex-col justify-center items-center bg-red-500  h-60 shadow-lg mb-9">
                            <div className="round-number border-4 border-gray-200 mx-auto  text-white font-extrabold text-2xl p-2 mt-5">
                                500+
                            </div>
                            <p className='font-bold text-white my-3 text-center'> Active number of customers and counting.</p>
                        </div>
                        <div className="row-span-1  shadow-lg">
                            <div className="grid grid-cols-3">
                                <div className=" flex justify-start p-4 font-extrabold items-center col-span-2">
                                    We are just a call away
                                </div>
                                <div className="col-span-1 border shadow-lg phone">
                                    <FaPhone size={40} className='text-green-500' /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second column on large screen */}
                <div className="col-span-3 md:col-span-1 mx-auto w-full">
                    <div className="grid grid-rows-3">
                        <div className="row-span-1 w-9/12 mx-auto border-2 shadow-lg mb-3 py-4 px-3 ">
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 flex items-center">
                                    <FaCalendarAlt size={40} />
                                </div>
                                <div className="flex  items-center h-20 col-span-2 font-extrabold">
                                    Booking System
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 row-span-2">
                            <div className="grid grid-rows-2 w-9/12  mx-auto  shadow-lg h-full">
                                <div className="row-span-1 bg-orange-500 ">
                                    <div className="grid grid-cols-3 p-4 ">
                                        
                                        <div className="col-span-2 font-extrabold text-white flex items-center  text-2xl">
                                            Elite Machines
                                        </div>

                                        <div className="col-span-1  flex items-center justify-center text-white">
                                            <FaToolbox size={40} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 flex flex-col justify-center pl-4">
                                    <h1 className='font-extrabold'>Average Customer Rating: <span className='text-green-500 font-extrabold'>4.6/5</span></h1>
                                    <p className="text-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, corporis.</p>
                                </div>
                                <div className="row-span-1">

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* ends here  */}
                <div className="col-span-3 hidden md:block md:col-span-1 mb-3 shadow-lg">
                    <div className="grid grid-rows-4">
                        <div className="row-span-1 h-20 bg-blue-500 shadow-lg mb-4">
                            <div className="grid grid-cols-3 ">
                                <div className="col-span-2 p-4  h-full text-white font-extrabold flex items-center">
                                    Customer Support  24/7
                                </div>
                                <div className="col-span-1 p-4 h-full flex items-center">
                                    <FaGlobe size={40} className='text-white  font-bold' />
                                </div>
                            </div>
                        </div>


                        <div className="row-span-1 h-20  shadow-lg">
                        <div className="grid grid-cols-3 ">
                                
                                <div className="col-span-1 p-4 h-full flex items-center">
                                    <FaTools size={40} className='  font-bold' />
                                </div>

                                <div className="col-span-2 p-4  h-full font-extrabold flex items-center">
                                    Monthly Maintenance
                                </div>
                            </div>
                        </div>
                        <div className="row-span-2 h-full bg-green-700  flex flex-col justify-center items-center">
                            <FaEye size={70} className='text-white font-bold '/>
                            <h1 className='text-3xl text-white font-bold'> We Are Everywhere</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Awesome