import React from 'react'
import image from "../images/cropped.jpeg"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const SideBar = () => {
  return (
    <div className='h-max w-max pl-8 pr-8 pb-6 border rounded-3xl border-zinc-500 fixed sidebar'>
      <div className='text-white p-5 sidename'>
        <div className='flex'>
          <h1 className='text-4xl font-semibold'>Noor Ayesha</h1>
          <div className='h-5 w-5 rounded-full border flex items-center justify-center text-xs ml-2'>N</div>
        </div>
        <h1 className='text-[18px] mt-3 font-normal'>Front End Developer</h1>
      </div>
      <div className='h-[240px] w-[280px] mt-4 rounded-2xl overflow-hidden front'>
        <img src={image} alt="Portfolio-image" />
      </div>
      <div className='m-auto text-white w-max mt-6 text-center'>
        <h1 className='text-xl font-light'>ayeshak0098@gmail.com</h1>
        <h1 className='text-2xl font-light '>Based in Lahore, Pakistan</h1>
        <p className='mt-5 text-zinc-500 text-[16px]'>© 2022 Noor. All Rights Reserved</p>
      </div>
      <div className='flex m-auto w-max mt-4'>
        <a href="https://api.whatsapp.com/send/?phone=923164544131" target="_blank">
          <div className='h-11 w-11 border-2 rounded-full border-zinc-500 flex items-center justify-center text-2xl text-zinc-500 cursor-pointer transition duration-300 hover:ease-in-out hover:border-green-400 hover:text-green-400'>
            <FaWhatsapp />
          </div>
        </a>
        <a href="https://instagram.com/___ayeshhakhan._" target="_blank">
          <div className='h-11 w-11 border-2 rounded-full border-zinc-500 flex items-center justify-center ml-3 text-2xl text-zinc-500 cursor-pointer transition duration-300 hover:ease-in-out hover:border-green-400 hover:text-green-400'>
            <FaInstagram />
          </div>
        </a>
        <a href="https://twitter.com/ayeshkhan00" target='_blank'>
          <div className='h-11 w-11 border-2 rounded-full border-zinc-500 flex items-center justify-center ml-3 text-xl text-zinc-500 cursor-pointer transition duration-300 hover:ease-in-out hover:border-green-400 hover:text-green-400'>
            <FaXTwitter />
          </div>
        </a>
        <a href="https://github.com/ayeshakhan00" target="_blank">
          <div className='h-11 w-11 border-2 rounded-full border-zinc-500 flex items-center justify-center ml-3 text-xl text-zinc-500 cursor-pointer transition duration-300 hover:ease-in-out hover:border-green-400 hover:text-green-400'>
            <FaGithub />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ayesha-khan-4790b2202" target="_blank">
          <div className='h-11 w-11 border-2 rounded-full border-zinc-500 flex items-center justify-center ml-3 text-xl text-zinc-500 cursor-pointer transition duration-300 hover:ease-in-out hover:border-green-400 hover:text-green-400'>
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <a href="#Contact">
        <button className='flex justify-center items-center text-zinc-800 text-xl mt-6 h-[50px] rounded-full transition duration-300 hover:ease-in-out bg-green-400 w-[100%] m-auto hover:border-2 hover:border-green-400 hover:text-green-400 hover:bg-transparent '><MdOutlineMailOutline className='mt-1 mr-3' />HIRE ME!</button>
      </a>
    </div>
  )
}

export default SideBar
