import React from 'react'
import { GoMail } from 'react-icons/go'
import { IoCloudUpload } from "react-icons/io5";

const Contact = () => {
    

    return (
        <div id='Contact' className='h-max w-[70%] p-10 mt-14 ml-[80px] m-border '>
            <div data-aos="fade-up" className='border mt-2 h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                <GoMail className='text-[14px] mr-2' />
                <h1 className='text-xs'>CONTACT</h1>
            </div>
            <h1 data-aos="fade-up" className='mt-2 text-white text-5xl leading-[55px] font-normal h1'>
                Let's Work <span style={{ color: "rgb(74,222,128)" }}> Together!</span></h1>
            <h1 data-aos="fade-up" className='mt-5 text-white text-lg font-normal'>ayeshak0098@gmail.com</h1>
            <div className=' h-max w-[80%] mt-12 flex flex-col flex-wrap '>
                <div className='flex flex-col w-[50%]'>
                    <label htmlFor="Name" className='text-white text-xs'>FULL NAME <span className='text-red-600'>*</span></label>
                    <input type="text" className='bg-transparent mt-2 place-hold h-9 text-white' placeholder='Your Full Name' />
                </div>
                <div className='flex flex-col mt-8 w-[50%]'>
                    <label htmlFor="Phone" className='text-white text-xs'>EMAIL <span className='text-red-600'>*</span></label>
                    <input type="text" className='bg-transparent mt-2 place-hold h-9 text-white' placeholder='Your Email Address' />
                </div>
                <div className='flex flex-col mt-8 w-[50%]'>
                    <label htmlFor="Phone" className='text-white text-xs '>PHONE (OPTIONAL)</label>
                    <input type="Number" className='bg-transparent mt-2 place-hold h-9 text-white' placeholder='Your Phone Number' />
                </div>
                <div className='flex flex-col mt-8 w-[100%] display'>
                    <label htmlFor="Phone" className='text-white text-xs'>YOUR BUDGET (OPTIONAL)</label>
                    <input type="Number" className='bg-transparent mt-2 place-hold h-9 text-white' placeholder='A Range Budget For Your Project' />
                </div>
                <div className='flex flex-col mt-8 w-100%'>
                    <label htmlFor="Phone" className='text-white text-xs'>MESSAGE</label>
                    <textarea type="text" className='bg-transparent mt-2 place-hold h-9 text-white' placeholder='Write Your Message Here...' />
                </div>
            </div>
            <div className='w-max flex items-center mt-4 justify-between'>
                <IoCloudUpload className='text-white'/>
                <label for="file-input" class="custom-button">ADD AN ATTACHMENT</label>
                <input type="file" id="file-input" />
            </div>
            <button className='h-12 w-60 rounded-full mt-7 bg-[rgb(74,222,128)] text-zinc-700
            transition duration-300 hover:ease-in-out hover:border-2 hover:border-green-400 hover:text-green-400 hover:bg-transparent'>SEND MESSAGE</button>
            <div className='btn pb-1'></div>
        </div>
    )
}

export default Contact
