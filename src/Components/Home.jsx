import React from 'react'
import SideBar from './SideBar'
import Main from './Main'

const Home = () => {
  return (
    <>
     <div id='home' className='h-max bg-[rgb(31,31,31)] p-6 '>
       <SideBar/>
       <Main/>
     </div>
    </>
  )
}

export default Home
