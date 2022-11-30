import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./About.css";
import About_Info from "./About_info";
import me from './me.jpg'
const About = () => {
    const [show,setShow] = useState(true)
  return (
    <main className="">
      <div className="container-all flex flex-col-reverse md:flex-row ">
        <div className="container-img">
        <img src={ me } alt="shun" id="about-img"  />
        </div>

        <header className="container ">
          <h2 className="text-4xl my-2">Favour Timothy</h2>
          <h3 className="mb-2">Frontend Intern </h3>
          <p className="text-2xl w-3/4 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex
            adipisci pariatur aspernatur alias. Repellendus maiores voluptas aut
            saepe deserunt!
          </p>
          <div className="cv-container">
          <a href="https://docs.google.com/document/d/181zY-WLmg6ikrXfWjiVtQ0_gblwwfjjL/edit?rtpof=true" className="cv-download" download> Download my CV </a>
          </div>
        </header>


      </div>
      <div className="about-skills w-10/12 m-auto">
        <h1 >Skills</h1>
        <p className="text-2xl mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, repellendus.
        </p>
        <p className="skills-text text-center">
        HTML & CSS    
        </p> 
        <progress value = '70' max='100' className="w-full"/>

        <p className="skills-text text-center">
        Tailwind CSS    
        </p> 
        <progress value = '60' max='100' className="w-full"/>
        
        <p className="skills-text text-center">
        Javascript    
        </p> 
        <progress value = '50' max='100' className="w-full"/>

        <p className="skills-text text-center">
        React  
        </p> 
        <progress value = '50' max='100' className="w-full"/>

        <p className="skills-text text-center">
        Redux
        </p> 
        <progress value = '50' max='100' className="w-full"/>

        <p className="skills-text text-center">
        Git & Github 
        </p> 
        <progress value = '70' max='100' className="w-full"/>
      </div>

      <div  className= 'about-link' >

      <Link onClick={()=> setShow(!show)} to={show ? "/about/about-info" : '/'} className='w-full'> {show ? 'See Hobbies and Interest' : 'Home'}</Link>

      </div>
      <Routes>
        <Route path="about-info" element={<About_Info />} />
      </Routes>
    </main>
  );
};

export default About;
