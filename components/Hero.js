import React from 'react'
import Link from 'next/link'


const Hero = () => {
    const mystyle = {
        backgroundImage: 'url("/images/fecoverpic.jpg")',
        height: "90vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",

    }

    return (
        <section className='bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/50 flex items-center justify-center' style={mystyle} >

            <div className='max-w-screen-lg space-y-1 flex-col text-start mr-auto relative mx-auto p-5 font-kanit tracking-wider text-xl  text-white pt-28 lg:text-2xl'>
                <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>A journey of teaching</h1>
                <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>A journey of learning</h1>


                <h2 className='text-lg lg:text-3xl capitalize py-1'>Imparting conceptual knowledge for last 27 years</h2>
                <h2 className='text-lg lg:text-3xl capitalize py-1 '>CA Meenu Sethi, B. Com. (Hons.) SRCC, FCA</h2>
            </div>
        </section>
    )
}

export default Hero
