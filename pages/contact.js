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

                <div className=" w-full min-h-[80vh]  pt-28 relative     "   >
                    <Image src="https://media.istockphoto.com/id/1335509326/photo/light-pink-and-blue-defocused-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=KxoOERQPUuqzsWXJLVN11EQ0iPkwl9ixUAICGaT1qwU=" alt="bg" fill={true} className="-z-20 object-fill" />

                    <div className="justify-center  items-center  flex flex-col-reverse lg:flex-row-reverse lg:h-[90vh] lg:mx-16">
                        <div className="md:mr-2 md:w-[85%] md:ml-1 px-5 ">

                            <h1 className="pt-12 font-extrabold text-2xl lg:text-4xl text-black shadow-graytext-gray-100 font-kanit">We are here to Help!</h1>
                            <p className=" text-lg lg:text-2xl shadow-graytext-gray-100 text-black font-molengo py-5 font-bold">We are here to Help!
                                We believe in the power of communication, and we&apos;re always eager to hear from our students, parents and well-wishers. Whether it&apos;s a question, feedback or enrolment, we appreciate it and encourage you to reach out to us.


                                <br />
                                <br />

                                Thank you for considering Forward Education for your academic needs. We look forward to hearing from you and providing the best educational experience possible.</p>
                        </div>

                        <div className="lg:w-[35%] lg:h-[85%] md:w-[85%] md:mt-10 lg:mt-0 lg:mx-10 bg-gray-100 p-7 shadow-2xl rounded-lg md:transition ease-in-out hover:scale-95 duration-700 md:mr-16 m-6">
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
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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