import React from 'react'
import Image from 'next/image'
import Heading from './Heading'



export const Teacher = () => {
    return (
        <section className='max-w-screen-lg ml-auto mr-auto  p-2 pb-10' id='teachers'>
            <Heading heading='TEACHERS' subHeading='OUR PROFESSIONAL TEACHERS' />

            <div className='grid-cols-1 gap-5'>
                <div className=' text-left max-w-[500px] lg:max-w-full lg:flex'>
                    <Image src="/images/gallery/11.jpeg" alt="" width={500} height={500} className='object-cover  aspect-square' />
                    <div className='lg:p-5 p-2'>
                        <h3 className='text-4xl font-bold font-kanit text-slate-700 mt-5'>Meenu Sethi</h3>
                        <p className='text-lg text-red-600 font-molengo font-semibold'>Chartered Accountant | Educator | Entrepreneur</p>
                        <p className='text-xl lg:text-2xl font-lg font-kanit text-slate-500 pt-2 font-bold'>FOUNDER AT FORWARD EDUCATION</p>
                        <p className='text-green-700 font-bold py-3'>Subjects - Accountancy, Business Studies and Economics</p>
                        <p className='font-molengo pb-5 text-gray-600'>Meenu Sethi has over 25 years of experience in teaching commerce subjects to over 2500 students. She firmly believes in imparting evolved and unique learning, by ensuring a personal connect with each student, understanding them in their journeys. She focuses on stimulating the intellect of students encouraging them to truly connect and understand the subjects by-passing the need of rote memorisation.</p>
                        <p className='font-molengo pb-5 text-gray-600'>She constantly inspires her students to excel not only in their academic pursuits but life in general.</p>
                    </div>


                </div>


                {/* empty div for upcoming teachers */}
                <div>

                </div>



            </div>
        </section>
    )
}


export default Teacher