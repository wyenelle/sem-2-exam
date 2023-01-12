import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./About.css";
import Fleet from "./Fleet";
import AboutUs_Header from "../../component/AboutUS/AboutUs_Header";
import Feature from "../../component/AboutFeature/Feature";
import Features from '../../component/Features/Features'
import Exhibition from "../../component/Exhibition";
import Footer from "../../component/Footer/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
  const text = 'we hope your time here was worth it'
useEffect(() => {
  AOS.init()

  
}, [])

  return (
    <main className="w-full flex flex-col ">
     
    
        


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
        
      
      <Link  to= "/about/fleet" className='w-full text-center text-4xl text-gray-500 mb-4  '> Fleet </Link>
      <Routes>
        <Route path='/fleet' element={<Fleet/>} />
      </Routes>

    </main>
  );
};

export default About;
