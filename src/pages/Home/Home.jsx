import './Home.css'
import { useEffect } from 'react'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet-async'
import Header from '../../component/Header/Header'
import Features from '../../component/Features/Features'
import Exhibition from '../../component/Exhibition'
import Awesome from '../../component/Awesome/Awesome'
import Testimonial from '../../component/Testimonials/Testimonial'
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
      <div className="w-full">
        <Header />
        <Features/>
          <div className='h-60  my-2'>
            <Exhibition />
          </div>
          <Awesome/>
      </div>
      <div>
        <Testimonial />
      </div>
    </main>
  )
}

export default Home