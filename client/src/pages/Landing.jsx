import React from 'react';
import  Parallax from '../Components/Parallax/Parallax';
import  Features from '../Components/Features/Features';
import  About  from '../Components/About/About';
import Home from '../Components/Home/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="mb-[100px]">
        <Home />
      </div>
      <div className="mb-[100px]">
        <About />
      </div>
      <div className="mb-[-100px] ">
        <Features />
      </div>
      <div className="mb-[100px]">
        <Parallax />
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;