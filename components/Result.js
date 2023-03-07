
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { topperResults } from '@/utility/data'
import { resultsList } from '@/utility/data'
import Link from 'next/link'


export const Result = () => {

    'url("/images/fecoverpic.jpg")'
    return (
        <div className='bg-gradient-to-r from-green-50 to-white'>
            <section className='max-w-screen-lg ml-auto mr-auto  pt-28 pb-12 px-2'>

                <Heading heading='Our Esteemed Results' subHeading='OUR TOP SCORERS' />
                <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 pb-32 text-gray-800'>
                    {topperResults.map((item, index) => {
                        const path = `url('/images/results/${item.img}')`
                        const mystyle = {
                            backgroundImage: path,
                            
                        }
                        return (

                            <div key={index} className='mx-2 mb-6 shadow-xl rounded-md '>
                                <div className='text-white text-sm text-center font-kanit '>
                                    <div className='bg-no-repeat bg-center h-[45vh] md:h-[30vh] bg-cover bg-blend-overlay rounded-lg relative' style={mystyle}>
                                        <div key={index} className='absolute grid  bottom-1 w-full text-center justify-center items-center '>
                                            {item.subject.map((sub, index) => {
                                                return (
                                                    <div className='bg-black/80 rounded-md my-px  px-3 py-1  text-sm' key={index}>{sub} - {item.marks[index]}/100</div>

                                                )
                                            })

                                            }
                                        </div>

                                        {/* <div className='relative top-[40vh]  mx-10 py-[2px] bg-black/80 rounded-md'>
                                            {item.subject} - {item.marks}/100
                                        </div> */}

                                    </div>
                                </div>
                                <div className='text-center text-2xl font-kanit font-bold py-2'>
                                    <p>{item.name}</p>
                                    <p className='text-xl'>{item.sname}</p>

                                </div>
                            </div>

                        )
                    }
                    )}

                </div>


                <Heading heading='Our Esteemed Results' subHeading='HALL OF FAME' />
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
        </div>
    )
}




export default Result