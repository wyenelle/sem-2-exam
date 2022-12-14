import React, { useReducer } from 'react'
import './Testimonial.css'
import {data} from './data'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import { useEffect } from 'react'

// REDUCER FUNCTION
const reducer = (slider,action) => {
switch (action.type) {
    case 'next':
        return slider < data.length ? slider + 1 : slider = 1
    case 'prev' :
        return slider == 1 ? slider = data.length : slider - 1

    default:
        throw new Error('not defined')
}
}

let initialState = 1

const Testimonial = () => {
    const [slider, dispatch] = useReducer(reducer,initialState)
    let info =  data.find(obj => obj.id === slider ) // FINDS A MATCHING OBJECT TO DISPLAY 

// PREV BUTTON HANDLER
const prev = () => (
dispatch({type : 'prev'}) 
)
// NEXT BUTTON HANDLER
const next = () => {
dispatch({type : 'next'})
let elem = document.querySelector('.sliding')
elem.classList.add('slide-left')
}
// AUTOMATICALLY SETS STATE
useEffect(()=>{
let interval = setInterval(() => {
// CALL THE NEXT FUNCTION TO SERVE THE NEXT SLIDE
    next()
}, 15000);
return ()=> clearInterval(interval)

},[])

return (
    <section className='w-full relative'>
        <div className="attachment">
            <div className="flex bg-black/30 flex-col gap-3 items-center h-full  justify-center">
            <header className="text-center  mt-4">
                <h1 className="text-white font-extrabold capitalize text-4xl"> Client's Box </h1>
                <p className="font-bold text-white text-center p-3">Our clients have wonderful things to say about us </p>
            </header>

            <div className="clients   bg-black/40 border-2 border-red-500/30 rounded-lg h-auto w-9/12  md:w-7/12 text-white" >
               <div id={info.id} data-aos='zoom-in' data-aos-delay='700' data-aos-duration='900' className='sliding flex flex-col justify-center py-4 px-3 items-center w-full h-full'>
               <blockquote className='font-bold mb-4 text-xl text-center md:px-6' >{info.desc}</blockquote>
                <h2 className='font-extrabold text-red-500 text-2xl capitalize'>{info.name}</h2>
               </div>
            </div>
            <div className="flex testimonial-arrow justify-between items-center  md:top-70   w-full">
            <FaAngleLeft onClick={prev} size={70} className=' text-white arrow-left    ' />
            <FaAngleRight onClick={next} size={70} className=' text-white  pr-0 arrow-right ' />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial