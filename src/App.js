import React, { useState } from 'react'
import Header from "./MyComponents/Header";
import Slider from "./MyComponents/Slider";
import Course from './MyComponents/Course';
import Contact from './MyComponents/Contact';
import About from './MyComponents/About';
import Gallery from './MyComponents/Gallery';
import Profile from './MyComponents/Profile';

export default function Main() {
  const [selectedCourse, setSelectedCourse] = useState('');

  // Function to capture the Course Name from Slider Component
  function getData(courseName) {
    setSelectedCourse(courseName);
  }

  return (
    <>
      <div>
        <Header />
        <Slider data={getData} />
        {
          selectedCourse && (
            <div className='text-center my-4'>
              <h4 className='text-primary'>You have selected: <b>{selectedCourse}</b></h4>
            </div>
          )
        }
        <Course />
        <Gallery />
        <Profile />
        <About />
        <Contact />
      </div>
    </>
  )
}
