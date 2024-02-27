import React from 'react'
import { GoStack } from "react-icons/go";
import { BiNetworkChart } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


const Services = () => {
    return (
        <div id='services' className='h-max w-[70%] p-10 mt-14 ml-[80px] m-border'>
            <div data-aos="fade-up" className='border mt-6 h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                <GoStack className='text-[14px] mr-2' />
                <h1 className='text-xs'>SERVICES</h1>
            </div>
            <h1 data-aos="fade-up" className='mt-6 text-white text-5xl leading-[55px] font-normal h1'>
                My <span style={{ color: "rgb(74,222,128)" }}> Specializations</span></h1>
            <div className='mt-12 h-max '>
                <div data-aos="fade-up" className='border cursor-default h-max border-zinc-500 rounded-2xl p-10 b-hover'>
                    <div className='flex justify-between'>
                        <p className='text-xl text-white inline'>Website Design</p>
                        <BiNetworkChart className='text-3xl text-green-500' />
                    </div>
                    <p className='mt-3 text-zinc-500 w-[80%]'>I professionally create web applications that will be user-friendly using HTML, CSS, and JavaScript.</p>
                    <p className='text-white u-line text-sm mt-4'>Projects</p>
                </div>
                <div data-aos="fade-up" className='border cursor-default h-max border-zinc-500 rounded-2xl p-10 b-hover mt-6'>
                    <div className='flex justify-between'>
                        <p className='text-xl text-white inline'>Development</p>
                        <FaCode className='text-3xl text-green-500' />
                    </div>
                    <p className='mt-2 text-zinc-500 w-[80%]'>I build website go live with Vercel or Netlify.</p>
                    <p className='text-white u-line text-sm mt-4'>Projects</p>
                </div>
                <div className='border cursor-default h-max border-zinc-500 rounded-2xl p-10 b-hover mt-6'>
                    <div className='flex justify-between'>
                        <p className='text-xl text-white inline'>Expertise</p>
                        <HiOutlineRocketLaunch className='text-2xl text-green-500' />
                    </div>
                    <p className='mt-3 text-zinc-500 w-[80%]'>HTML, CSS, JavaScript, Local Storage, React JS, Jquery and Responsive Design</p>
                    <p className='text-white u-line text-sm mt-4'>Projects</p>
                </div>
            </div>
        </div>
    )
}

export default Services
