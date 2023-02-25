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

                <div className=" w-full min-h-[80vh] pt-28 relative py-28" >

                    <Image alt='bg image' src="/images/image.png" fill={true} className="-z-10 opacity-90 blur-sm object-cover py-10" />

                    <div className="justify-center  items-center  flex flex-col md:flex-row md:h-[80vh] ">
                        <div className="md:mr-20 md:w-[40%] md:ml-16 px-5 ">

                            <h1 className="pt-12 font-extrabold text-2xl lg:text-4xl text-white shadow-white font-kanit">We are here Help!</h1>
                            <p className="font-semibold text-lg lg:text-2xl shadow-white text-white font-molengo py-5">We understand that you may have questions or concerns about our services, and we want to make it as easy as possible for you to get in touch with us.

                                Please feel free to use our Contact Us section to send us a message. We strive to respond promptly to all inquiries and will do our best to address your needs and concerns. Our team of web developers is highly skilled and experienced, and we are committed to delivering quality results that exceed your expectations.</p>
                        </div>

                        <div className="lg:w-[30%] lg:h-[100%] md:w-[40%] md:mt-10 lg:mt-0 bg-white p-10 shadow-2xl rounded-lg md:transition ease-in-out hover:scale-95 duration-700 md:mr-16">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <div className="ml-2 font-semibold text-lg  font-molengo ">
                                    <p>A-2/29, Second Floor,</p>
                                    <p>Prateek Apartments,</p>
                                    <p>Paschim Vihar,</p>
                                    <p>New Delhi - 110063</p>
                                </div>

                            </div>
                            <div className="flex mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <div className="ml-2 font-semibold text-lg  font-molengo ">
                                    <p>T-2, Ansal Utility Complex, </p>
                                    <p>Near Jwala Heri Haldiram,</p>
                                    <p>Paschim Vihar,</p>
                                    <p>New Delhi - 110063</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className=''>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5916334689223!2d77.10031666508148!3d28.671943689047065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0477d62d5cc3%3A0x21f0ecb39a35dbb9!2sPrateek%20Apartments%2C%20A%202%20Block%2C%20Paschim%20Vihar%2C%20Delhi%2C%20110063!5e0!3m2!1sen!2sin!4v1677174299371!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </section>


            </div>
            <Footer />
        </>

    )
}

export default contact