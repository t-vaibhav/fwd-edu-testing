import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/images/foredulogo.jpg"

const Navbar = () => {
  const [hamburger, sethamburger] = useState(true)

  return (
    <section className=' bg-white fixed top-0 right-0 left-0 z-10 shadow-md'>

      <nav className='flex box-border h-24 items-center justify-around md:justify-between max-w-screen-lg mx-auto duration-500 font-kanit font-bold text-lg bg-white '>
        <div >
          <Link href="/" className='py-4'><Image src={logo} alt="" className=' h-16 w-auto' /></Link>
        </div>

        <div className='lg:block hidden'>
          <ul className='flex text-gray-700'>
            <li className='py-2.5 pl-6 text-lime-600'><Link href="/">Home</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/#about">About</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/#popular-courses">Subjects</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/#teachers">Teachers</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/gallery">Gallery</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/results">Results</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/reviews">Reviews</Link></li>
            <li className='py-2.5 pl-6  hover:text-lime-600'><Link href="/contact">Contact</Link></li>
          </ul >
        </div>

        <div className='lg:hidden z-20'>

          <div onClick={() => sethamburger((prev) => { return !prev })} className=" cursor-pointer text-2xl p-10">
            {hamburger ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>

          <div className={`fixed h-full w-full top-24 z-20 right-0 bg-white/70 backdrop-blur-sm p-14  ${hamburger ? "hidden" : ""}`}>
            <ul className='flex-col text-center pl-4 space-y-10  text-gray-900 font-bold  text-2xl'>
              <li className='' onClick={()=>sethamburger(true)} ><Link href="/">Home</Link></li>
              <li className='' onClick={()=>sethamburger(true)}><Link  href="/#about">About</Link></li>
              <li className='' onClick={()=>sethamburger(true)}><Link href="/#popular-courses">Subjects</Link></li>
              <li className='' onClick={()=>sethamburger(true)}><Link href="/#teachers">Teachers</Link></li>
              <li className='' ><Link href="/gallery">Gallery</Link></li>
              <li className='' ><Link href="/results">Results</Link></li>
              <li className='' ><Link href="/reviews">Reviews</Link></li>
              <li className='' ><Link href="/contact">Contact</Link></li>
            </ul >

          </div>

        </div>
      </nav >
    </section >
  )
}

export default Navbar