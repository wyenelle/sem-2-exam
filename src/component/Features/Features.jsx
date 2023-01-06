import React from 'react'
import {data} from '../data'
import Card from '../Card'
import { FaBoxes } from 'react-icons/fa'
const Features = () => {
  return (
    <section className=''>
 <h1 className='text-4xl text-center text-gray-500  mt-2 mb-2  mx-auto w-full py-2'> 
      <FaBoxes color='gray' size={60} className='mx-auto hover:shadow-lg mb-3 shadow-md'/>
      Also In Our Locker
      </h1>

        <div className="feature-card w-full grid grid-cols-1 md:grid-cols-3 p-4">
            {
                data.map(card =>(
                    <Card key={card.id} card={card} />
                ) )
            }
        </div>
    </section>
  )
}

export default Features