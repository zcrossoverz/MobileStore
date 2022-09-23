import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SimpleSlider from '../components/Slider'

export default function Homepage() {
  return (
    <>
        <Header />
        <div style={{ marginTop:"80px", height:"1000px" }}>
          <SimpleSlider />
        </div>
        <Footer />
    </>
  )
}
