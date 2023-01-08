import React from 'react'
import './AppSection.css'
import Phones from '../assets/about/phone2.png'
const AppSection = () => {
const styles = {
    width: '70%',
    height: '70%'
}


    return (
    <section className='flex items-center justify-center  h-full'>
        <div className="w-full h-80 sm:h-full grid bg-white/90  grid-cols-2 ">
            <div className="col-span-2 sm:col-span-1 pl-6 pr-4   shadow-lg sm:shadow-none flex flex-col justify-center  h-full  ">
                <h1 className="font-extrabold text-2xl sm:text-3xl">
                    Modern Mobile App
                </h1>
                <p className='my-4 w-4/5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ea fugiat commodi, recusandae amet id eos repellendus dolorem maxime modi facere ipsam unde, sapiente, veritatis non saepe corrupti ut in.
                </p>
                <button className='outline-none text-start font-bold py-2'>Get The App</button>
            </div>
            <div className="col-span-1 hidden app-sec sm:block  ">
                <div className="flex bg-white/70 h-full justify-center items-center">
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