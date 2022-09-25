import React from 'react'
import Discount from '../components/Discount'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import SimpleSlider from '../components/Slider'

export default function Homepage() {
  return (
    <>
        <Header />
        <div style={{ marginTop:"80px" }}>
          <SimpleSlider />
          <Discount />
          <ListItem />
        </div>
        <Footer />
    </>
  )
}
