import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { Helmet } from 'react-helmet-async'


const NotFound = () => {
  return (
    <section className='h-screen'>
       <Helmet>

<title> Main App </title>
<meta name='description' content=' Pages that dont match the routes goes. Any page outsideof the defined routes in the app will be redirected here '  />
<link rel='canonical' href='*' />
</Helmet>
        <div className="error-wrapper grid grid-cols-2 h-full">
        <div className="error-404 hidden md:block md:col-span-1 h-full">
       <div className="flex flex-col justify-center items-center h-full">
       <h1 className='text-5xl font-etrabold my-4'>
          Page  Not Found
        </h1>
        <h2> Go<Link className='err-link font-extrabold my-2' to='/'> <b className='err-home'>Home</b> </Link></h2>
       </div>
        </div>
        <div className="col-span-2 text-white flex justify center md:col-span-1 h-full  err-col-2">
        <div className="text-center h-60 mx-auto bg-black flex items-center md:hidden">
          <Link to='/' className='border px-2 py-2 rounded'> Go back home  </Link>

        </div>
        
        </div>
        
        </div>
    </section>
  )
}

export default NotFound