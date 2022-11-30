import React from 'react'
import './About_info.css'

const About_Info = () => {
  
  return (
    <div className='grid gap-4 grid-cols-1  md:grid-cols-3 about-info-bg'>
      <div className="hobby_1 w-full m-auto">
        <div className="hobby-text text-4xl">
          <h1>Coding</h1>
          <p className="text-white text-2xl w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae?
          </p>
        </div>
      </div>
      <div className="hobby_3 w-full m-auto">
      <div className="hobby-text text-4xl">
          <h1>Music</h1>
          <p className="text-white text-2xl  w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae?
          </p>
        </div>
      </div>
      
      <div className="hobby_5 w-full m-auto">
      <div className="hobby-text text-4xl">
          <h1>Reading</h1>
          <p className="text-white text-2xl  w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae?
          </p>
        </div>
      </div>
      <div className="hobby_6 w-full m-auto">
      <div className="hobby-text text-4xl">
          <h1> Table Tennis</h1>
          <p className="text-white text-2xl  w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae?
          </p>
        </div>
      </div>
      <div className="hobby_4 md:col-span-2 w-full m-auto ">
      <div className="hobby-text text-4xl">
          <h1>Football</h1>
          <p className="text-white text-2xl  w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About_Info