import React from 'react'
import './Welcome.css'
import speedometer from '../../assets/cars/speedometer.jpeg'
import {FaCaretRight,FaAngleDoubleRight} from 'react-icons/fa'
const Welcome = () => {
  return (
    <section>
        <div className="grid grid-cols-2 p-5 text-white md:text-white bg-black">
            <div className="col-span-2 md:col-span-1">
                <div className="welcome-text">
                    <h2 className='font-extrabold text-2xl my-3'>Welcome</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam impedit sapiente fugit iusto, soluta repellendus aperiam obcaecati, recusandae beatae id voluptate a itaque earum quidem consectetur nisi odit nemo excepturi!
                    </p>
                    <div className="my-4"></div>

                        <div className="  grid grid-cols-6  py-2 ">
                            <div className="col-span-1 my-2  ">

                            <FaAngleDoubleRight size={40} className='text-red-500 welcome-arrow '/>
                            </div>

                            <p className='col-span-5 my-2 flex  items-center '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="col-span-1 my-2  ">

                            <FaAngleDoubleRight size={40} className='text-red-500 welcome-arrow '/>
                            </div>

                            <p className='col-span-5 my-2 flex  items-center  '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="col-span-1 my-2  ">

                            <FaAngleDoubleRight size={40} className='text-red-500 welcome-arrow '/>
                            </div>

                            <p className='col-span-5 flex  items-center '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>


                        
                    
                </div>
            </div>
            <div className="col-span-1 hidden md:block bg-black ">
                <div className="flex justify-center items-center h-full">
                <img src={speedometer} alt='speedometer' className='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome