import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      {/* <div className='row bg-red-600'>
        <div className=' w-1/2'>
        <Link to="" className='uppercase font-extrabold text-4xl'>Start Framework</Link>
        </div>
        <div className=' w-1/2'>
        <ul className='flex gap-3 mx-auto'>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </div>

      </div> */}


      

<nav className="border-gray-200  text-white z-50 fixed top-0 right-0 left-0" style={{backgroundColor:"#2c3e50"}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-28 p-8">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center uppercase font-extrabold text-4xl whitespace-nowrap ">Start Framework</span>
    </Link>

    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
        <li>
          <NavLink to="about" className="block py-2 px-3 text-white  rounded uppercase font-semibold text-lg" >About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3  text-white  rounded uppercase font-semibold text-lg" >Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3  text-white  rounded uppercase font-semibold text-lg" >Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>



    </>
  )
}
