import React from 'react'
import { resultsList } from '@/utility/data'
import Image from 'next/image'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const results = () => {
    return (
        <>
            <Navbar />
            <div className=' mt-20 pt-20 px-5  max-w-5xl mx-auto font-kanit'>
                <Heading heading='OUR ESTEEMED RESULTS' subHeading='RESULTS' />

            </div>

            <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-10 pt-3 py-10">

                {resultsList.map((item, index) => {
                    return (
                        <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3  md:w-full shadow-xl md:transition ease-in-out hover:scale-95 hover:opacity-90 duration-700 lg:mx-2 grid grid-cols-1 ">
                            <h5 className="font-extrabold text-white  bg-green-300 p-6 text-center text-xl  ">{item.heading}</h5>

                            <div className="w-[100%]">
                                <Image alt="subject image" className="w-[100%] md:h-64 p-2 " src={item.img} width={600} height={400} />
                            </div>
                            <div className="flex flex-row justify-center space-x-2">
                                <button className="bg-white text-black w-[80%] shadow-md text-center p-4 rounded-2xl mt-3 font-kanit ">Check Result</button>

                            </div>
                        </div>
                    )
                }
                )}





            </div>
            <Footer />
        </>
    )
}

export default results