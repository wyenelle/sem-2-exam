import React, { useState } from 'react'
import './Testimonial.css'
import {data} from './data'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import { useEffect } from 'react'

const Testimonial = () => {
    const [slide,setSlide] = useState(2)
    let info =  data.find(obj => obj.id === slide )
console.log()
    // useEffect(() => {
        // let interval =     setInterval(() => {
            // console.log(data.length);
            // slide < data.length ? setSlide(prevState => prevState + 1) : setSlide(1)
        // }, 3000)
// return clearInterval(interval)
    // },[slide])
  return (
    <section className='w-full relative'>
        <div className="attachment">
            <div className="flex bg-black/30 flex-col gap-3 items-center h-full  justify-center">
            <header className="text-center  mt-4">
                <h1 className="text-red-500 font-extrabold capitalize text-4xl"> Client's Box </h1>
                <p className="font-bold text-white text-center p-3">Our clients have wonderful things to say about us </p>
            </header>

            <div className="clients flex flex-col justify-center py-4 px-3 items-center bg-black/40 border-2 border-red-500/60 rounded-md h-40 w-9/12 text-white" >
                <blockquote className='font-bold mb-4 text-center' data-aos='zoom-in' data-aos-delay='700' data-aos-duration='900'>{info.desc}</blockquote>
                <h2 className='font-extrabold text-red-500 text-2xl capitalize'>{info.name}</h2>
            </div>
            <div className="flex absolute justify-between items-center top-60  w-full">
            <AiOutlineArrowLeft size={70} className=' text-red-500    font-extrabold' />
            <AiOutlineArrowRight size={70} className=' text-red-500  pr-0  font-extrabold' />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial