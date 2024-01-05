import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { PiFolderNotchOpen } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { PiGearSixThin } from "react-icons/pi";
import { RxTable } from "react-icons/rx";
import { GoMail } from "react-icons/go";

const RightSideBar = () => {

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='h-[320px] border rounded-full w-14 fixed ml-[64%] mt-40 border-zinc-500 flex justify-center items-center flex-col rightbar'>
      <a onClick={() => handleSectionClick("home")} href="#home" title='Home' className={`sidebar-link ${activeSection === "home" ? "active" : ""}`}>
        <IoHomeOutline className='text-[20px] hover:text-green-500'/>         
      </a>
      <a  onClick={() => handleSectionClick("about")} href="#about_section" title='About' className={`sidebar-link ${activeSection === "about" ? "active" : ""}`}>
        <HiOutlineUser className='icon'/>
      </a>
      <a onClick={() => handleSectionClick("resume")} href="#resume" title='Resume' className={`sidebar-link ${activeSection === "resume" ? "active" : ""}`}>
        <PiFolderNotchOpen className='icon'/>
        </a>
      <a onClick={() => handleSectionClick("services")} href="#services" title='Services' className={`sidebar-link ${activeSection === "services" ? "active" : ""}`}>
        <GoStack className='icon'/>
      </a>
      <a onClick={() => handleSectionClick("skills")} href="#skills" title='Skills' className={`sidebar-link ${activeSection === "skills" ? "active" : ""}`}>
        <PiGearSixThin className='icon'/>
      </a>
      <a onClick={() => handleSectionClick("projects")} href="#projects" title='Projects' className={`sidebar-link ${activeSection === "projects" ? "active" : ""}`}>
        <RxTable className='icon'/>
      </a>
      <a onClick={() => handleSectionClick("Contact")} href="#Contact" title='Contact' className={`sidebar-link ${activeSection === "Contact" ? "active" : ""}`}>
        <GoMail className='icon' />
      </a>

    </div>
  )
}

export default RightSideBar
