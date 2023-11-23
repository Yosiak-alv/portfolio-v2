import React,{useEffect} from 'react';
import { NavBar } from './components/NavBar';

import { Route } from 'react-router';
import { Routes } from 'react-router';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function App(){
  useEffect(() =>{
    Aos.init({
      duration: 1000, 
      easing: 'linear',
    });
  },[]);
  return (
    <div className='bg-[#282C33]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about-me' element={<About/>}/>
        <Route path='/contact-me' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}