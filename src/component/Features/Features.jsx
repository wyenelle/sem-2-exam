import React from 'react'
import {data} from '../data'
import Card from '../Card'
const Features = () => {
  return (
    <section className=''>

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