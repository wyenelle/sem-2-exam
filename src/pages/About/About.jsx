import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {FaRocket,FaCar,FaHandPointUp,FaDesktop} from 'react-icons/fa'
import "./About.css";
import builder from '../../assets/about/builder.jpg'
import Collection from "../../component/Collection";
import Fleet from "./Fleet";
import Nav from "./about-nav/nav";
const About = () => {
    const [show,setShow] = useState(true)
  return (
    <main className="w-full">
      <div className="">
        <Nav/>
      </div>
     <div className="w-full border-4  hidden md:block border-red-500 bg-red-500 about-shape ">
        <img src={builder} alt='about-us' className='about-img mx-auto'/>

      </div>
        <div className="abs hidden md:block   w-full">
          <div className="circle flex  justify-between gap-4 mx-auto w-full px-2 items-center">
            <div className="circle-icon move-up flex justify-center items-center border-2  border-red-500 ">
            <FaRocket size={70} className='rocket' />
            </div>
            <div className="circle-icon car-holder flex justify-center items-center text-center border border-red-500">
              <FaCar size={70} className='car'/>
             </div>
            <div className="circle-icon  flex 
            hover:shadow-lg hover:shadow-red-500/40 
            justify-center items-center border border-red-500">
              <FaDesktop size={70} className='fade' />
            </div>
            
            <div className="circle-icon move-up flex justify-center items-center hover:shadow-lg hover:shadow-red-500/40 border border-red-500">
              <FaHandPointUp size={70} />
            </div>
          </div>
        </div>

        <div className="w-full">
          <Collection />
        </div>
      
      <Link  to= "/about/fleet" className='w-full'> 
      See Our Latest Fleet
      </Link>
      <Routes>
        <Route path="fleet" element={<Fleet/>} />
      </Routes>
    </main>
  );
};

export default About;
