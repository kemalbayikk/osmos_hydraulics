import React from 'react'
import About from '../home/about/About'
import Branding from '../home/Branding'
import BrandingTwo from '../home/BrandingTwo'
import Contact from '../home/contact/Contact'
import Home from '../home/homescreen/Home'
import Products from '../home/products/Products'

const HomePages = () => {
  return (
    <>
        <Home/>
        <Branding/>
        <Products/>
        {/* <BrandingTwo/> */}
        <About/>
        <Contact/>
    </>
  )
}

export default HomePages