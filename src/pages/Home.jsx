import React from 'react';
import { Hero, NavBar, Sponsors, Intro } from '../components';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
      <NavBar /> 
      <Hero />
      <Sponsors />
      <Intro />
      <ContactUs />
    </>
  )
}

export default Home