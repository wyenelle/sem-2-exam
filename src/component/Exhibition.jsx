import React from 'react'
import './Exhibition.css'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
const Exhibition = () => {
  return (
    <section className='w-full h-full p-5 my-8'>
        <div className="grid grid-cols-2">
            <div className="exhibit-text h-full col-span-2 flex flex-col justify-center gap-4  md:col-span-1 pl-3">
                <h1 className="text-2xl uppercase font-bold">
                    Best rental price
                </h1>

                <p className="font-bold  w-10/12 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui dolor maiores mo
                </p>
                <p className="font-bold w-10/12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nem.
                </p>
                <div className="exhibition-link flex gap-3 items-center font-bold">
                <Link to='/'> Rent a car    </Link>
                <FaArrowRight className='exhibition-arrow' />
                </div>
            </div>

            <div className="exhibition-img hidden md:block col-span-1">

            </div>
        </div>
    </section>
  )
}

export default Exhibition