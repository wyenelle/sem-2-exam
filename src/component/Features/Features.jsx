import React from 'react'
import {data} from '../data'
import Card from '../Card'
const Features = () => {
  return (
    <section className=''>
          <h1 className='text-4xl my-7 text-center font-extrabold'>Also In Our Locker.. </h1>

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