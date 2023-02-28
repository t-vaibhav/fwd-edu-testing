import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const contact = () => {
    return (
        <>
            <Navbar />
            <div>

    <div className=" w-full min-h-[80vh] pt-28 relative py-28 bg-cover mainContact"   >

  

        <div className="justify-center  items-center  flex flex-col md:flex-row md:h-[80vh] ">
            <div className="md:mr-20 md:w-[40%] md:ml-16 px-5 ">

                <h1 className="pt-12 font-extrabold text-2xl lg:text-4xl text-black shadow-graytext-gray-100 font-kanit">We are here to Help!</h1>
                <p className=" text-lg lg:text-2xl shadow-graytext-gray-100 text-black font-molengo py-5 font-bold">We understand that you may have questions or concerns about our services, and we want to make it as easy as possible for you to get in touch with us.

                    Please feel free to use our Contact Us section to send us a message. We strive to respond promptly to all inquiries and will do our best to address your needs and concerns. Our team of web developers is highly skilled and experienced, and we are committed to delivering quality results that exceed your expectations.</p>
            </div>

            <div className="lg:w-[30%] lg:h-[80%] md:w-[40%] md:mt-10 lg:mt-0 bg-gray-100 p-10 shadow-2xl rounded-lg md:transition ease-in-out hover:scale-95 duration-700 md:mr-16">
                <h5 className="text-center font-extrabold text-3xl font-kanit">Contact Us</h5>
                <Script src="https://cdn.lordicon.com/ritcuqlt.js"></Script>

                <div className="flex mt-8 mx-auto">
                    <lord-icon
                        src="https://cdn.lordicon.com/ehfubvwr.json"
                        trigger="hover"
                        className=" mr-2">
                    </lord-icon>
                    <p className="font-semibold text-lg font-molengo">meenu.ca@gmail.com</p>
                </div>


                <div className="flex mt-8">
                    <lord-icon
                        src="https://cdn.lordicon.com/tftaqjwp.json"
                        trigger="hover"
                        className="mr-2">
                    </lord-icon>

                    <p className="font-semibold text-lg font-molengo">9810763856</p>
                </div>

                <div className="flex mt-8">
                    <div className="w-20 h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path strokeLineCap="round" strokelLineJoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLineCap="round" strokelLineJoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    </div>
                    <div className="ml-2 font-semibold text-lg  font-molengo ">
                    <p> T-2, Ansal Utility Complex, 
                        Near Jwala Heri Haldiram,
                        Paschim Vihar,
                        New Delhi - 110063
                        </p>
                    
                    </div>

                </div>
                <div className="flex mt-8">
                    <div className="w-20 h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    </div>
                    <div className="ml-2 font-semibold text-lg  font-molengo ">
                        CSP Tower 1, Unit no. 1101, 1st Floor, DLF Capital Greens, Shivaji Marg, Near Moti Nagar, New Delhi - 110015
                    </div>

                </div>
            </div>
        </div>
    </div>



</div>
            <Footer />
        </>

    )
}

export default contact