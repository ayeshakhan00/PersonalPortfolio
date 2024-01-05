import React from 'react'
import { PiGearSixThin } from 'react-icons/pi'
import { FaCss3 } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import tailwind from '../images/Tailwind-CSS-15-Component-Libraries-UI-Kits-removebg-preview.png'
import { SiNextdotjs} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Skills = () => {
  return (
    <div id='skills' className='h-max w-[70%] p-10 ml-[80px] m-24 m-border'>
      <div data-aos="fade-up" className='border h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
        <PiGearSixThin className='text-[14px] mr-2' />
        <h1 className='text-xs'>MY SKILLS</h1>
      </div>
      <h1 data-aos="fade-up" className='mt-6 text-white text-5xl leading-[55px] font-normal'>
        My <span style={{ color: "rgb(74,222,128)" }}> Advantages</span></h1>
      <div className=' mt-10 flex flex-wrap gap-6 skillauto'>
        <div data-aos="fade-right" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
            <FaCss3 className='text-blue-400 text-6xl mt-2'/>
            <p className='text-green-500 text-3xl mt-4'>98%</p>
          </div>
            <p className='text-white mt-3'>CSS/ Html</p>
        </div>
        <div data-aos="fade-up" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
          <DiJavascript className='text-white text-7xl'/>
            <p className='text-green-500 text-3xl mt-5'>86%</p>
          </div>
            <p className='text-white mt-3'>Java Script</p>
        </div>
        <div data-aos="fade-up" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
            <FaReact className='text-7xl text-white'/>
            <p className='text-green-500 text-3xl mt-8'>80%</p>
          </div>
            <p className='text-white mt-3'>React</p>
        </div>
        <div data-aos="fade-left" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
            <img src={tailwind} alt="" />
            <p className='text-green-500 text-3xl mt-6'>94%</p>
          </div>
            <p className='text-white mt-3'>Tailwind</p>
        </div>
        <div data-aos="fade-right" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
            <SiNextdotjs className='text-5xl text-white'/>
            <p className='text-green-500 text-3xl mt-6'>70%</p>
          </div>
            <p className='text-white mt-3'>Next Js</p>
        </div>
        <div data-aos="fade-up" className=' flex flex-col items-center'>
          <div className='h-52 border w-[145px] border-zinc-500 rounded-full flex justify-center items-center flex-col b-hover'>
            <FaGithub className='text-5xl text-white'/>
            <p className='text-green-500 text-3xl mt-6'>70%</p>
          </div>
            <p className='text-white mt-3'>Git-HUb</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
