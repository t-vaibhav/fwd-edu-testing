import React from 'react'

const Hero = () => {
    const mystyle = {
        backgroundImage: 'url("/images/fecoverpic.jpg")',
        height: "90vh",
        backgroundAttachment: "fixed",

    }

    return (
        <section className='bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/50 flex items-center justify-center' style={mystyle} >

            <div className='max-w-screen-lg flex-col text-start mr-auto relative mx-auto p-5 font-kanit text-xl text-white pt-28 lg:text-2xl'>
                <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>Unlock Your Potential with Forward Education</h1>
                {/* <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>A journey of learning</h1> */}


                <h2 className='text-lg lg:text-3xl capitalize py-2'>Get ready for competitive exams with confidence.</h2>
                <h2 className='text-lg lg:text-3xl capitalize py-2 '>Master accountancy, business studies, and economics</h2>
            </div>
        </section>
    )
}

export default Hero
