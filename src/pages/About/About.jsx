import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./About.css";
import Fleet from "./Fleet";
import AboutUs_Header from "../../component/AboutUS/AboutUs_Header";
import Feature from "../../component/AboutFeature/Feature";
import Features from '../../component/Features/Features'
import Exhibition from "../../component/Exhibition";
import Footer from "../../component/Footer/Footer";


const About = () => {
  const text = 'we hope your time here was worth it'

  return (
    <main className="w-full flex flex-col ">
     
    
        {/* <div className="abs hidden md:block   w-full">
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
        </div> */}


        <div className="w-full">
          <AboutUs_Header/>
        </div>
        <div className="w-full exhibition-about">
          <Exhibition/>
        </div>
        <div className="w-full feature-css ">
          <Feature/>
        </div>
        <div className="w-full feat-css  flex items-center border ">

          <Features />
        </div>
        
      
      <Link  to= "/about/fleet" className='w-full text-center text-4xl text-gray-500 mb-4 border-4 border-red-500 '> Fleet </Link>

    </main>
  );
};

export default About;
