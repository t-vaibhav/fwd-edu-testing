import React from 'react'

const Hero = () => {
    const mystyle = {
        backgroundImage: 'url("/images/fecoverpic.jpg")',
        height: "90vh",
        backgroundAttachment: "fixed",

    }

    return (
        <section className='bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/50 flex items-center justify-center' style={mystyle} >

            <div className='max-w-screen-lg flex-col text-start mr-auto relative lg:ml-64 p-5 font-kanit text-xl text-white pt-28 lg:text-2xl'>
                <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>A journey of teaching</h1>
                <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>A journey of learning</h1>


                <h2 className='text-lg lg:text-3xl'>Imparting conceptual knowledge for last 25 years.</h2>
                <h2 className='text-lg lg:text-3xl '>CA Meenu Sethi, B. Com. (Hons.) SRCC, FCA </h2>
            </div>
        </section>
    )
}

export default Hero
