import React from 'react'
import { PiFolderNotchOpen } from 'react-icons/pi'
import { GoDotFill } from "react-icons/go";
import { FaHandPointLeft } from "react-icons/fa";

const Resume = () => {
    return (
        <div id='resume' className='h-max w-[70%] mt-24 pt-10 p-10 ml-[80px] m-border'>
            <div className='h-max w-[80%]'>
                <div data-aos="fade-up" className='border h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                    <PiFolderNotchOpen className='text-[14px] mr-2' />
                    <h1 className='text-xs'>RESUME</h1>
                </div>
                <a href="https://drive.google.com/file/d/18tRBilJWlDsVlHHkZ_OoxEL2yIpOQWn0/view?usp=drive_link"
                    download="https://drive.google.com/file/d/18tRBilJWlDsVlHHkZ_OoxEL2yIpOQWn0/view?usp=drive_link"><button data-aos="fade-up"
                        className='h-8 mt-6 w-44 border rounded-full border-zinc-500 text-white text-sm inline-block'>Download Resume</button></a>
                        <FaHandPointLeft className='inline ml-4 text-green-400' />
            <p className='mt-2 inline-block ml-3 underline blinking-text '>CLICK to open resume</p>
            </div>
            <h1 data-aos="fade-up" className='mt-6 text-white text-5xl leading-[55px] font-normal'>Education & <span style={{ color: "rgb(74,222,128)" }}>Experience</span></h1>
            <div className='mt-6 h-max'>
                <div data-aos="fade-left" className='h-max border-l border-zinc-600 relative mainhover pb-14'>
                    <div className='w-[60%] flex justify-between items-center h-4 texthover'>
                        <GoDotFill className='absolute -left-3 text-[22px] -top-1' />
                        <p className='ml-14'>2023 - 2024</p>
                    </div>
                    <div className=' ml-14 mt-6'>
                        <p className='text-white text-xl'>Front End Developer</p>
                        <p className='mt-1'>WebDevrs Coding Bootcamp</p>
                        <p className='text-white text-xl mt-4'>Animations & Figma to Html/CSS</p>
                        <p className='mt-1'>Freelancing</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='h-max border-l border-zinc-600 relative mainhover pb-14'>
                    <div className='w-[60%] flex justify-between items-center h-4 texthover'>
                        <GoDotFill className='absolute -left-3 text-[22px] -top-1' />
                        <p className='ml-14'>2020 - 2023</p>
                    </div>
                    <div className=' ml-14 mt-6'>
                        <p className='text-white text-xl'>Bachelor of English Literature & Linguistic</p>
                        <p className='mt-1'>National University Of Modern Languages</p>
                    </div>
                </div>
                <div className='h-max border-l border-zinc-600 relative mainhover pb-2'>
                    <div className='w-[60%] flex justify-between items-center h-4 texthover'>
                        <GoDotFill className='absolute -left-3 text-[22px] -top-1' />
                        <p className='ml-14'>2017 - 2019</p>
                    </div>
                    <div className=' ml-14 mt-6'>
                        <p className='text-white text-xl'>Intermediate In Computer Science</p>
                        <p className='mt-1'>Punjab Group Of Colleges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
