import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Services from '../components/Services'
import About from '../components/About'
import Doctor from '../components/Doctor'
import Footer from './Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Services/>
    <About/>
    <Doctor/>
    <Footer/>
    </>
  )
}

export default Home