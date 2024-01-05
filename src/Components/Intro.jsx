import React from 'react'
import { HiOutlineHome } from 'react-icons/hi2'
import proj from '../images/round-text.png'
import { BsArrowDown } from "react-icons/bs";

const Intro = () => {
    return (
        <div className=' h-max w-[75%] p-10 ml-[7%] mt-30 m-border'>
            <div className='border mt-2 w-[160px] h-10 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                <HiOutlineHome className='text-[16px] mr-2' />
                <h1 className='text-xs'>INTRODUCE</h1>
            </div>
            <h1 className='h1 mt-14 text-white text-7xl w-[80%]'>Hey from <span style={{ color: "rgb(74,222,128)" }}>NOOR</span>, Website Designer and Developer</h1>
            <div className='w-[85%] mt-[60px] small'>
                <p className='text-zinc-500 text-lg'>I craft captivating, beautifully simple designs through code. Passionate about transforming ideas into visually stunning and functional realities, I love what I do.</p>
            </div>
            <a href="#projects">
                <div className='h-44 w-44 border border-zinc-500 rounded-full cursor-pointer flex justify-center items-center ml-[80%] mb-8 mt-8 projanim'>
                    <BsArrowDown className='absolute text-5xl text-white' />
                    <img className='anim h-36 w-36' src={proj} alt="" />
                </div>
            </a>
            <div className=' flex justify-between w-[58%] -mt-4'>
                <div className=''>
                    <p className='text-green-500 text-6xl'>2+</p>
                    <p className='text-zinc-500 text-base mt-5'>YEARS OF EXPERIENCE</p>
                </div>
                <div className=' ml-6'>
                    <p className='text-green-500 text-6xl'>250+</p>
                    <p className='text-zinc-500 text-base mt-5'>PROJECTS COMPLETED IN DIFFERENT LIBRARIES</p>
                </div>
            </div>
        </div>
    )
}

export default Intro
