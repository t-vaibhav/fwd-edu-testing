import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Head from 'next/head'


// const mystyle = {
//     height: '50px',
//     widht: '50px'
// }
const contact = () => {
    return (
        <>
            <Head>
                <title>Forward Education | Contact</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div>

                <div className=" w-full min-h-[80vh] pt-28 relative">
                    <Image src="https://media.istockphoto.com/id/1335509326/photo/light-pink-and-blue-defocused-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=KxoOERQPUuqzsWXJLVN11EQ0iPkwl9ixUAICGaT1qwU=" alt="bg" fill={true} className="-z-20 object-fill" />

                    <div className="justify-center  items-center  flex flex-col-reverse lg:flex-row-reverse lg:h-[90vh] lg:mx-16   ">
                        <div className="md:mr-2 md:w-[85%] md:ml-1 px-5 lg:max-w-[60%] ">

                            <h1 className="pt-12 font-extrabold text-2xl lg:text-4xl text-black shadow-graytext-gray-100 font-kanit">We are here to Help!</h1>
                            <p className=" text-lg lg:text-2xl shadow-graytext-gray-100 text-black font-molengo py-5 font-bold">
                                We believe in the power of communication, and we&apos;re always eager to hear from our students, parents and well-wishers. Whether it&apos;s a question, feedback or enrolment, we appreciate it and encourage you to reach out to us.


                                <br />
                                <br />

                                Thank you for considering Forward Education for your academic needs. We look forward to hearing from you and providing the best educational experience possible.</p>
                        </div>

                        <div className="lg:w-[55vh] lg:min-w-[40%] lg:h-[85%] md:w-[85%] md:mt-10 lg:mt-0 lg:mx-10 bg-gray-100 p-7 shadow-2xl rounded-lg md:transition ease-in-out hover:scale-95 duration-700 md:mr-16 m-6">
                            <h5 className="text-center font-extrabold text-3xl font-kanit">Contact Us</h5>
                            <Script src="https://cdn.lordicon.com/ritcuqlt.js"></Script>

                            <div className="flex ml-[2px] mt-8 mx-auto ">
                                <lord-icon
                                    src="https://cdn.lordicon.com/ehfubvwr.json"
                                    trigger="hover"
                                    className=" mr-2 h-7">
                                </lord-icon>
                                <p className="font-semibold text-lg pl-2 font-molengo">meenu.ca@gmail.com</p>
                            </div>


                            <div className="flex ml-[2px] mt-6 mr-20">
                                <lord-icon
                                    src="https://cdn.lordicon.com/tftaqjwp.json"
                                    trigger="hover"
                                    className="pr-8">
                                </lord-icon>

                                <p className="font-semibold text-lg pl-2 font-molengo ">9810763856</p>
                            </div>


                            <div className="flex mt-6">
                                <div className=" items-center justify-between flex font-semibold text-lg font-molengo">
                                    <Image src="/images/pin.png" alt="bg" height={35} width={35} className="mr-2 pb-1" />

                                    <p> T-2, Ansal Utility Complex,
                                        Near Jwala Heri Haldiram,
                                        Paschim Vihar,
                                        New Delhi - 110063
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <div className=" items-center justify-between flex font-semibold text-lg font-molengo">
                                    <Image src="/images/pin.png" alt="bg" height={35} width={35} className="mr-2 pb-1" />

                                    <p> CSP Tower 1, Unit no. 1101,
                                        1st Floor, DLF Capital Greens,
                                        Shivaji Marg, Near Moti Nagar,
                                        New Delhi - 110015
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button className=' bg-green-500 py-1 mt-8 px-4 mb-2 md:px-6 text-neutral-200 rounded-sm  hover:bg-red-400 '> <Link href="https://forms.gle/XfDyjjVeEXCY8VUq6" target="_blank" >Enroll Now!</Link></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
            <Footer />
        </>

    )
}

export default contact