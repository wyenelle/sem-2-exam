import React from 'react'
import './Benefits.css'
import {FaCheckDouble,} from 'react-icons/fa'
import {data} from './data'

const Benefits = () => {
    
  return (
    <section className='w-full benefit  '>
        <div className="bg-black/70 h-full flex py-6 flex-col justify-center px-4">
            <div className="text-center py-3">
                <h2 className='text-2xl text-white font-extrabold my-5 '>
                    Why Choose Us
                </h2>
                <p className=" font-bold text-white/90">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, nostrum?
                </p>
            </div>
            
            <div className=" grid grid-cols-10">
               {
                data.map(obj => (
                    <div key={obj.id} className="md:col-span-5 col-span-10 flex justify-center items-center text-white  p-5">
                    <div className="icon">
                    <FaCheckDouble size={40} className='text-blue-500'/>
                    </div>
                    <div className="pl-5 ">
                        <h2 className='text-xl my-2 font-extrabold'>{obj.title} </h2>
                        <p className="font-normal">
                        {obj.details}
                        </p>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Benefits