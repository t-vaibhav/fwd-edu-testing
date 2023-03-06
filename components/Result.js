
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { topperResult } from '@/utility/data'
import { resultsList } from '@/utility/data'
import Link from 'next/link'


export const Result = () => {

    'url("/images/fecoverpic.jpg")'
    return (
        <section className='max-w-screen-lg ml-auto mr-auto  pt-28 pb-12 px-2'>

            <Heading heading='Our Esteemed Results' subHeading='LAST YEAR RESULTS' />
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 pb-32'>
                {topperResult.map((item, index) => {
                    const path = `url('/images/results/${item.img}')`
                    const mystyle = {
                        backgroundImage: path,
                        height: "45vh"
                    }
                    return (

                        <div key={index} className='mx-2 mb-6'>
                            <div className='text-white text-sm text-center font-kanit '>
                                <div className='bg-no-repeat bg-center bg-cover bg-blend-overlay rounded-lg' style={mystyle}>
                                    <div className='relative top-[40vh]  mx-10 py-[2px] bg-black/80 rounded-md'>
                                        {item.subject} - {item.marks}/100
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-2xl font-kanit font-bold pt-2'>
                                <p>{item.name}</p>
                                <p className='text-xl'>{item.sname}</p>

                            </div>
                        </div>

                    )
                }
                )}

            </div>


            <Heading heading='Our Esteemed Results' subHeading='PREVIOUS YEAR RESULTS' />
            <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-10 pt-3 py-10">

                {resultsList.map((item, index) => {
                    return (
                        <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3  md:w-full shadow-xl md:transition ease-in-out hover:scale-95 hover:opacity-90 duration-700 lg:mx-2 grid grid-cols-1 ">
                            <h5 className="font-extrabold text-white  bg-green-300 p-6 text-center text-xl  ">{item.heading}</h5>

                            <div className="w-[100%]">
                                <Image alt="subject image" className="w-[100%] md:h-64 p-2 " src={item.img} width={600} height={400} />
                            </div>
                            <div className="flex flex-row justify-center space-x-2">
                                <Link href={`/assests/${item.pdfLink}`} target="_blank" className="bg-white text-black w-[80%] shadow-md text-center p-4 rounded-2xl mt-3 font-kanit ">Check Result</Link>

                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
}




export default Result