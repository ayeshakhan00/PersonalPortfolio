import React from 'react'
import { RxTable } from 'react-icons/rx'
import main from "../images/Screenshot-bw-(25).png"
import proj1 from "../images/Screenshot (25).png"
import main2 from "../images/Screenshot (31).png"
import proj2 from "../images/Screenshot (30).png"
import main3 from "../images/Screenshot (32).png"
import proj3 from "../images/Screenshot (33).png"
import main4 from "../images/Screenshot (26).png"
import proj4 from "../images/Screenshot (27).png"
import main5 from "../images/Screenshotsample(35).png"
import proj5 from "../images/Screenshot (35).png"



const Projects = () => {
    return (
        <div id='projects' className='h-max w-[70%] p-10 mt-14 ml-[80px] m-border'>
            <div data-aos="fade-up" className='border mt-6 h-8 w-28 rounded-full border-zinc-500 text-white flex justify-center items-center'>
                <RxTable className='text-[14px] mr-2' />
                <h1 className='text-xs'>PROJECTS</h1>
            </div>
            <h1 data-aos="fade-up" className=' h1 mt-6 text-white text-5xl leading-[55px] font-normal'>
                Featured <span style={{ color: "rgb(74,222,128)" }}> Projects</span></h1>

            <a href="https://techno-clone.netlify.app">
                <div className='h-[400px] mt-8 cursor-pointer hov-dec'>
                    <div className=' h-[350px] relative flex justify-center items-center'>
                        <img className='h-[350px] shadow-xl rounded-3xl absolute' src={main} alt="" />
                        <img className='h-[220px] rounded-3xl absolute' src={proj1} alt="" />
                        <div className='absolute h-[350px] bg-div w-[100%] rounded-3xl flex justify-center items-center'>
                            <p className='text-green-500 underline'>CLICK HERE TO SEE THE PROJECT</p>
                        </div>
                    </div>
                    <p className='deco text-xl text-white mt-4'>CSS/Html Techno Sample Website </p>
                </div>
            </a>
            <a href="https://css-electro-web.netlify.app">
                <div className='h-[400px] mt-8 cursor-pointer hov-dec'>
                    <div className=' h-[350px] relative flex justify-center items-center'>
                        <img className='h-[350px] shadow-xl rounded-3xl absolute' src={main5} alt="" />
                        <img className='h-[220px] rounded-3xl absolute' src={proj5} alt="" />
                        <div className='absolute h-[350px] bg-div w-[100%] rounded-3xl flex justify-center items-center'>
                            <p className='text-green-500 underline'>CLICK HERE TO SEE THE PROJECT</p>
                        </div>
                    </div>
                    <p className='deco text-xl text-white mt-4'>CSS/Html Responsive Electro Sample Website </p>
                </div>
            </a>
            <a href="https://reactapp-toursite.netlify.app">
                <div className='h-[430px] mt-14 cursor-pointer hov-dec'>
                    <div className=' h-[390px] relative  flex justify-center items-center'>
                        <img className='h-[390px] shadow-xl rounded-3xl absolute' src={main2} alt="" />
                        <img className='h-[220px] rounded-3xl absolute' src={proj2} alt="" />
                        <div className='absolute h-[390px] bg-div w-[100%] rounded-3xl flex justify-center items-center'>
                            <p className='text-green-500 underline'>CLICK HERE TO SEE THE PROJECT</p>
                        </div>
                    </div>
                    <p className='deco text-xl text-white mt-4'>ReactJS Tour Site</p>
                </div>
            </a>
            <a href="https://js-alma-websample.netlify.app">
                <div className='h-[430px] mt-14 cursor-pointer hov-dec'>
                    <div className=' h-[350px] relative  flex justify-center items-center'>
                        <img className='h-[350px] shadow-xl rounded-3xl absolute' src={main3} alt="" />
                        <img className='h-[190px] rounded-3xl absolute' src={proj3} alt="" />
                        <div className='absolute h-[350px] bg-div w-[100%] rounded-3xl flex justify-center items-center'>
                            <p className='text-green-500 underline'>CLICK HERE TO SEE THE PROJECT</p>
                        </div>
                    </div>
                    <p className='deco text-xl text-white mt-4'>JS All Events ALMA Web Sample </p>
                </div>
            </a>
            <a href="https://dark-light-mode-js.netlify.app">
                <div className='h-[430px] mt-14 cursor-pointer hov-dec'>
                    <div className=' h-[350px] relative  flex justify-center items-center'>
                        <img className='h-[350px] shadow-xl rounded-3xl absolute' src={main4} alt="" />
                        <img className='h-[180px] rounded-3xl absolute' src={proj4} alt="" />
                        <div className='absolute h-[350px] bg-div w-[100%] rounded-3xl flex justify-center items-center'>
                            <p className='text-green-500 underline'>CLICK HERE TO SEE THE PROJECT</p>
                        </div>
                    </div>
                    <p className='deco text-xl text-white mt-4'>JS Dark/Light Mode Theme Sample </p>
                </div>
            </a>
        </div>
    )
}

export default Projects
