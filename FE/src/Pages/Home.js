import React from 'react'
import Announcement from '../Components/Announcement/Announcement'
import Categories from '../Components/Category/Categories'
import Footer from '../Components/Asset/Footer'
import Navbar from '../Components/Asset/Navbar'
import Newsletter from '../Components/Asset/Newsletter'
import Products from '../Components/Product/Products'
import Slider from '../Components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
