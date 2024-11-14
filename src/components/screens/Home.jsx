
import Carousel from "../Carousel";
import slide from "../../data/carsourData";
import Footer from "../Footer";
import Person from "../Person";
import Frequ from "../Frequ";
import Goal from "../Goal"
import React from 'react';
import Mentors from "./Mentors";
import About from "../About"



const Home = () => (
          <>

         <Carousel data={slide.slides} />
      
         <Person/>
         <Goal/>
         <Frequ/>
         <Footer/>
       </>
);

export default Home;