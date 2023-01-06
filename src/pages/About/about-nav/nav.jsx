import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import logo from '../../../assets/about/at.png'
import { useEffect } from 'react'
const Nav = () => {
 useEffect(()=>{
  const btn = document.querySelector('#menu-btn')
  const nav = document.querySelector('#menu')
  const link_1 = document.getElementById('link1')
  const link_2 = document.getElementById('link2')
  const link_3 = document.getElementById('link3')
  const link_4 = document.getElementById('link4')
const toggle = () =>{
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
}
  link_1.addEventListener('click',toggle)
  link_2.addEventListener('click',toggle)
  link_3.addEventListener('click',toggle)
  link_4.addEventListener('click',toggle)
  
  btn.addEventListener('click', toggle)
 })
  

  return (
    <nav className=" relative h-20 py-3 bg-black flex items-center justify-center  w-full">
      <div className="flex items-center w-full justify-between p-5">

      <div className="pt-2 relative flex flex-col ">
        <img src={logo} alt='logo' className='absolute -top-7' />
       <Link to='/'> <h2 className='text-4xl text-red-500'> AutoZone`</h2></Link>
      </div>

        <div className="hidden text-white   text-center md:flex overflow-hidden justify-center space-x-12 text-white  ">
          <Link className=' p-3 font-extrabold' to='/'> Home</Link>
          <Link className=' p-3 font-extrabold' to='/about'> About</Link>
          <Link className=' p-3 font-extrabold' to='/boundary'> Test</Link>
          <Link className=' p-3 font-extrabold' to='/repo'> Repo</Link>
        </div>

        <div className=" hidden md:block bg-red-500 text-white font-extrabold p-3">
        Choose Your Car
      </div>

      <button id="menu-btn" className="block  hamburger md:hidden   focus:outline-none">
        <span className="bg-red-500 hamburger-top"></span>
        <span className="bg-red-500 hamburger-middle"></span>
        <span className="bg-red-500 hamburger-bottom"></span>
        </button>        
      </div>

      <div className="md:hidden">
        <div id="menu" className="absolute top-5 bg-black  flex-col items-center self-end  py-8 hidden mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 text-white   drop-shadow-md">
        <Link className='hover:text-orange-300 ' id='link1' to='/'> Home</Link>
          <Link className='hover:text-orange-300 ' id='link2' to='/about'> About</Link>
          <Link className='hover:text-orange-300 ' id='link3' to='/boundary'> Test</Link>
          <Link className='hover:text-orange-300 ' id='link4' to='/repo'> Repo</Link>

        </div>

     
      </div>
    </nav>  
  )
}

export default Nav