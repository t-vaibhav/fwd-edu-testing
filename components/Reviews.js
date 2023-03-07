import React, { useState } from 'react'
import Image from 'next/image'
import { studentReviews, parentReviews } from '@/utility/data'
export const Reviews = () => {
    const [stu, setstu] = useState("Student")
    const studentReviewsCard = studentReviews.map((review, index) => {

        return (
            <div className='sm:flex items-center justify-center my-20 max-w-screen-[40vh] px-2'>
                <div className='sm:mr-12 flex justify-center'>
                    <Image src={`/images/reviews/${review.img}`} className=' rounded-md sm:h-[120px] sm:max-w-[110px] h-[200px] max-w-[175px] mb-4 sm:mb-0' width={600} height={600} alt={review.student} />
                </div>
                <div>
                    <p className='text-gray-800 '>{review.txt}</p>
                    <h4 className='text-lg text-black font-bold font-kanit' dangerouslySetInnerHTML={{ __html: review.student }}></h4>
                    <div className='border-blue-600 border h-[1px] mt-3'></div>
                </div>
            </div>
            // <div className='text-left font-molengo min-h-full mx-5 md:mx-0 flex-col gap-y-3 items-start justify-start p-3 shadow-md bg-green-50 ' key={index}>
            //     <div className='flex items-center justify-center relative'>
            //         <Image src={`/images/reviews/${review.img}`} className='rounded-sm object-contain' width={600} height={700} alt={review.student} />
            //     </div>
            //     <p className='text-gray-800 py-2 '>{review.txt}</p>
            //     <h4 className='text-lg text-black font-bold rounded font-kanit ' dangerouslySetInnerHTML={{ __html: review.student }}></h4>
            // </div>
        )
    })


    const parentReviewsCard = parentReviews.map((review, index) => {
        return (
            <>
                <div className='flex  items-center my-20'>
                    <div className='mr-12'>
                        <Image src={`/images/reviews/${review.img}`} className=' rounded-md h-[120px] max-w-[110px]' width={600} height={600} alt={review.parent} />
                    </div>
                    <div>
                        <p className='text-gray-800 '>{review.txt}</p>
                        <h4 className='text-lg text-black font-bold font-kanit' dangerouslySetInnerHTML={{ __html: review.parent }}></h4>
                        <div className='border-blue-600 border h-[1px] mt-3'></div>
                    </div>
                </div>


                {/* <div className='text-left font-molengo min-h-full mx-5 md:mx-0 flex-col gap-y-3 items-start justify-start p-3 shadow-md bg-green-50 ' key={index}>
                    <div className='flex items-center justify-center relative'>
                        <Image src={`/images/reviews/${review.img}`} className='rounded-sm object-contain' width={600} height={700} alt={review.student} />
                    </div>
                    <p className='text-gray-800 py-2 '>{review.txt}</p>
                    <h4 className='text-lg text-black font-bold rounded font-kanit' dangerouslySetInnerHTML={{ __html: review.parent }}></h4>
                </div> */}
            </>
        )
    })




    return (
        <section className='bg-gradient-to-r from-green-50 to-white'>

            <div className='text-center bg-green-400 py-5 text-4xl text-white font-kanit mt-24'>Reviews</div>
            <div className='lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-10'>
                <div className="flex justify-around items-center sm:text-3xl text-xl font-kanit">
                    <button className={`px-2 py-1 sm:py-2 font-kanit border-2 border-cyan-900 text-indigo-900  md:transition ease-in-out hover:scale-95 hover:opacity-90 duration-700 shadow-2xl hover:text-cyan-900 cursor-pointer  rounded-lg mb-5 sm:px-5 ${stu == "Student" ? "bg-zinc-300" : ""}`} onClick={() => { setstu("Student") }}>Student Reviews</button>
                    <button className={`px-2 py-1 sm:py-2 font-kanit border-2 border-cyan-900 text-indigo-900  md:transition ease-in-out hover:scale-95 hover:opacity-90 duration-700 shadow-2xl hover:text-cyan-900 cursor-pointer rounded-lg mb-5 sm:px-5 ${stu == "Parent" ? "bg-zinc-300" : ""}`} onClick={() => { setstu("Parent") }}>Parent Reviews</button>
                </div>


                <div className=''>
                    {stu == "Student" ? studentReviewsCard : parentReviewsCard}
                </div>



                {/* <div className='grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center'>
                    {parentReviewsCard}
                </div> */}
            </div>
        </section>
    )
}

export default Reviews
