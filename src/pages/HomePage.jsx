import React from 'react'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Testimonial from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'


function HomePage() {
  return (
    <>
    
     <Banner/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage