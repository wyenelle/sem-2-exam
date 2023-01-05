import React from 'react'
import Phones from '../assets/about/app-section.png'
const AppSection = () => {
const styles = {
    width: '70%',
    height: '70%'
}


    return (
    <section className='flex items-center justify-center h-full'>
        <div className="w-full h-80 md:h-full grid  grid-cols-2 ">
            <div className="col-span-2 md:col-span-1 pl-6 pr-4  shadow-lg md:shadow-none flex flex-col justify-center  h-full  ">
                <h1 className="font-extrabold text-2xl md:text-3xl">
                    Modern Mobile App
                </h1>
                <p className='my-4 w-4/5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ea fugiat commodi, recusandae amet id eos repellendus dolorem maxime modi facere ipsam unde, sapiente, veritatis non saepe corrupti ut in.
                </p>
                <button className=' text-start font-bold py-2'>Get The App</button>
            </div>
            <div className="col-span-1 hidden md:block  ">
                <div className="flex  h-full justify-center items-center">
                <div className="app-section-img w-full h-full flex items-center  ">
                    <img src={Phones} style={styles} className='phones' />
                </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default AppSection