import React from 'react'
import Banner from './Banner/Banner'
import Trust from './Trust/Trust'
import Services from './Services/Services'
import Selling from './Selling/Selling'
import Testimoni from './Testimonials/Testimoni'
import Catalogi from './Catelogies/Catalogi'

function Home() {
  return (
    <>
    <Banner/>
    <Trust/>
    <Services/>
    <Selling/>
    <Testimoni/>
    <Catalogi/>
    </>
  );
}

export default Home