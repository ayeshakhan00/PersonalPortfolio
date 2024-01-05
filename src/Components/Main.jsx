import React from 'react'
import RightSideBar from './RightSideBar'
import Intro from './Intro'
import About from './About'
import Resume from './Resume'
import Services from './Services'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => {
  return (
    <div className='h-max ml-[400px] margin'>
      <RightSideBar/>
      <Intro/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Main
