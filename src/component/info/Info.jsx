import React, { useContext, useEffect } from 'react'
import './Info.css'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Info = ({obj,isLoading}) => {
 const {name,id} = obj
 useEffect(()=>{
  AOS.init()
 })
  return (
    <header data-aos = 'fade-left' data-aos-duration = '1500' className='info'>
      {!isLoading  ? (
        <div>
          <h1 className='text-3xl'>
            {name}
          </h1>
          
          <Link to={`/repo/${id}`} className='info-link ' > Open Up</Link>
        </div>

  ) : ''}
    </header>
        
    
  )
}

export default Info