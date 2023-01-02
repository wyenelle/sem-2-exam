import React from 'react'
import preview_1 from '../assets/about/preview-1.jpg'
import preview_2 from '../assets/about/preview-2.jpg'
import preview_3 from '../assets/about/preview-3.jpg'
import preview_4 from '../assets/about/preview-4.jpg'
import preview_5 from '../assets/about/preview-5.jpg'
import preview_6 from '../assets/about/preview-6.jpg'
import preview_7 from '../assets/about/preview-7.jpg'
import preview_8 from '../assets/about/preview-8.jpg'
const Collection = () => {
    const images = [preview_1,preview_2,preview_3,preview_4,preview_5,preview_6,preview_7,preview_8]
  return (
    <section className='w-full'>
        <div className="grid grid-cols-1 md:grid-cols-4 p-3">
           {
            images.map((img,idx) => (
                <div key={idx} className="col-span-1 mx-2 my-6 md:my-4 align-center">
               <img src={img} alt='img'className='w-full' />
                </div>
            ))
           }
        </div>
    </section>
  )
}

export default Collection