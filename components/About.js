import React from 'react'
import Image from 'next/image'
import Heading from './Heading'


export const About = () => {

    // const style = {
    //     position: 'absolute',
    //     top: '696px',
    //     right: '0',
    //     left: '0'
    // }
    return (


        <section className='max-w-screen-lg flex ml-auto mr-auto  p-2' id='about'>
            <div className='md:w-1/2 '>
                <Heading heading='ABOUT' subHeading='ABOUT US' />


                <div className='relative w-full h-[35vh] md:hidden'>
                    <Image src="/images/classroom image.jpg" alt="" fill={true} className=' w-full pb-5 object-contain' />
                </div>
                <p className='font-molengo'>
                    FORWARD EDUCATION was established back in <strong>1996</strong> by Meenu Sethi who graduated from <strong>SRCC</strong> in first division in 1993 and further excelled herself in clearing coveted <strong>Chartered Accountancy</strong> examination in just 3 years – a rare achievement.
                </p>
                <br />
                <p className='font-molengo'>
                    She declined lucrative job offers from multinationals favouring her passion for teaching and started FORWARD EDUCATION to impart top quality and sincere coaching to commerce students.
                </p>
                <br />
                <ul className='font-kanit'>
                    <a href="" className='flex items-center px-2 h-10 rounded-md my-2 text-gray-700 py-2 bg-yellow-300'><Image width={30} height={30} src="/images/accept.png" alt="" className='h-full p-1 object-contain ' /><li className=''><strong>Unique methods of coaching</strong></li></a>
                    <a href="" className='flex items-center px-2 h-10 rounded-md my-2 text-gray-700 py-2 bg-green-300'><Image width={30} height={30} src="/images/accept.png" alt="" className='h-full p-1 object-contain ' /><li className=''><strong>Concept-rich education</strong></li></a>
                    <a href="" className='flex items-center px-2 h-10 rounded-md my-2 text-gray-700 py-2 bg-blue-300'><Image width={30} height={30} src="/images/accept.png" alt="" className='h-full p-1 object-contain ' /><li className=''><strong>Personal bonding</strong></li></a>
                </ul>
                <br />
                <p>
                    Education imparted at FORWARD EDUCATION greatly helps the students in academic excellence in school examinations and prepares them for competitive examinations as well.
                </p>


            </div>

            <div className='w-1/2 h-[45vh] px-4 mt-auto mb-auto hidden md:block relative'>
                <Image src="/images/classroom image.jpg" className='object-contain' fill={true} alt="" />
            </div>
        </section>

    )
}

export default About
