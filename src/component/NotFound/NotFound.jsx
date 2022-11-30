import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { Helmet } from 'react-helmet-async'


const NotFound = () => {
  return (
    <section>
       <Helmet>

<title> Main App </title>
<meta name='description' content=' Pages that dont match the routes goes. Any page outsideof the defined routes in the app will be redirected here '  />
<link rel='canonical' href='*' />
</Helmet>
        <div className="error-wrapper">
        <div className="error-404">
        <h1>
          Page  Not Found
        </h1>
        <h2> Go<Link className='err-link' to='/'> <b className='err-home'>Home</b> </Link></h2>
        </div>
        </div>
    </section>
  )
}

export default NotFound