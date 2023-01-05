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
import Benefits from '../../component/Benefits/Benefits'
import Footer from '../../component/Footer/Footer'
import Welcome from '../../component/Welcome/Welcome'
import AppSection from '../../component/AppSection'
const Home = () => {
  const sum = <span className='text-red-500'>AutoZone</span>
  const text = `At ${sum} ,your satisfaction matters a lot`
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
        <Welcome/>
          <Awesome/>
      </div>
      <div>
        <Benefits/>
        <Testimonial />
      </div>
          <div className='md:h-screen h-80 my-2'>
            <AppSection />
          </div>
          <Footer text={text} />

    </main>
  )
}

export default Home