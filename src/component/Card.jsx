import React from 'react'
import './Card.css'
const Card = ({card}) => {
  
  return (
  <div className=" feature-card col-span-1 mb-5 w-11/12 shadow-md  md:border md:shadow-md m-auto hover:shadow-lg ">
      <div  id={card.id == 1 ? 'style-1' : card.id == 2 ? 'style-2' : card.id == 3 ?  "style-3" : ''}
    className=' border  text-center    w-full m-auto '>
       <div className="w-full p-5 flex flex-col justify-center bg-black/70 h-full">
       <h1 className='font-bold text-2xl text-white capitalize'>{card.title} </h1>
        <p className='text-gray-200/90 font-bold p-3 '>{card.desc} </p>
        <button className='bg-red-500 w-6/12 p-3 rounded-md m-auto text-white font-bold'>Check it out</button>
       </div>
       
    </div>

    <div className="card-text m-auto h-20 w-10/12 flex justify-center items-center">
      <h1 className=' font-extrabold text-2xl mt-4'>{card.type} </h1>
    </div>
  </div>
  )
}

export default Card