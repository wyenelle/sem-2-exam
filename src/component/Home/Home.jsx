import './Home.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet-async'

const Home = () => {
useEffect(()=>{
  AOS.init()
})

  return (
    <main className='home'>
       <Helmet>

<title> Main App </title>
<meta name='description' content=' This is the central page to the whole app. you can view my github repositor from here. '  />
<link rel='canonical' href='/' />
</Helmet>
      <header className='home-header'>
       <div className="home-text" data-aos='fade-in' data-aos-duration = '3000' >
       <h1 className='text-5xl'>
          Welcome to My Space. <b>Wyenelle</b> has you covered
        </h1>

        <Link className='repo-link' to='/repo'> Take A Look  </Link>
       </div>


      </header>

    </main>
  )
}

export default Home