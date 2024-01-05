import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { HiOutlineUser } from 'react-icons/hi2'

const About = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div id="about_section" className='h-max w-[70%] mt-8 pt-32 p-10 ml-[80px] m-border'>
            <div data-aos="fade-up" className='border mt-2 h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                <HiOutlineUser className='text-[14px] mr-2' />
                <h1 className='text-xs'>ABOUT</h1>
            </div>
            <h1 data-aos="fade-up" className='mt-14 text-white text-5xl leading-[55px] font-normal h1'>Every great design begin with an even <span style={{ color: "rgb(74,222,128)" }}>better story.</span></h1>
            <div data-aos="fade-up" className='w-[85%] mt-[60px] small'>
                <p className='text-zinc-500 text-lg'>In my nearly 2-year freelance design adventure, I've worked on remote projects for agencies and collaborated on creating digital products for both businesses and consumers. I'm quietly confident, naturally curious, and always working on getting better at design challenges.</p>
            </div>

        </div>
    )
}

export default About
