import React from 'react'
import {MdSearch} from 'react-icons/md'
import { FaEnvelopeOpen,FaList,FaCheck,FaCarSide,FaSearch,FaHandPointDown } from 'react-icons/fa'
import {data} from './data'

const Feature = () => {
const icons = [<FaSearch size={40}/>,<FaHandPointDown size={40}/>,<FaList size={40}/>,<FaCheck size={49}/>, <FaCarSide size={40}/>,]

  return (
    <section className='w-full h-screen  px-5'>
      <h1 className='text-4xl font-extrabold text-center'> We Offer...</h1>
        <div className="grid grid-cols-3 h-full md:h-auto w-full mt-6 ">
 {
           data.map(obj => (
            <div key={obj.id} className="col-span-3 md:col-span-1  shadow-lg h-40 m-2 ">
                <div className="flex w-full items-center justify-center  h-full">
                      <div className='px-2'>
                         {icons[obj.id - 1]}
                      </div>
                    <div className="feature-text w-4/5 ">
                      <h1  className=" px-2 capitalize font-extrabold feature-title my-2 text-xl">{obj.title}</h1>
                      <p className='pl-2 w-11/12'>{obj.desc}</p>
                    </div>
                </div>
            </div>

           ))
}            
<div className="col-span-3 md:col-span-1 mx-2 shadow-lg h-40 ">
                <div className="flex w-full items-center justify-center  h-full">
                    <div className='px-2'>
                    <FaEnvelopeOpen size={40} />
                    </div>
                    <div className="feature-text w-4/5 px-2 ">
                      <h1  className="font-extrabold capitalize feature-title  my-2 text-xl">
                        subscribe for exclusive offers and deals
                      </h1>
                      <input type='text' placeholder='johndoe@gmail.com' className='w-11/12 rounded border-2 py-2 outline-none' />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Feature