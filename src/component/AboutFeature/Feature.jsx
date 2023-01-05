import React from 'react'
import {MdSearch} from 'react-icons/md'
const Feature = () => {
  return (
    <section className='w-full h-screen px-5'>
        <div className="grid grid-cols-3 h-full w-full border border-black">
            <div className="col-span-3 md:col-span-1 border border-black h-40 ">
                <div className="flex items-center">
                    <MdSearch size={40} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature