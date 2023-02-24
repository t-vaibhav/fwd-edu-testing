import React, { useState } from 'react'
import Image from 'next/image'
import { studentReviews, parentReviews } from '@/utility/data'
export const Reviews = () => {
    const [stu, setstu] = useState("Student")
    const studentReviewsCard = studentReviews.map((review, index) => {

        return (
            <div className='text-left font-molengo min-h-full mx-5 md:mx-0 flex-col gap-y-3 items-start justify-start p-3 shadow-md bg-green-50 ' key={index}>
                <div className='flex items-center justify-center relative'>
                    <Image src={`/images/reviews/${review.img}`} className='rounded-sm object-contain' width={600} height={700} alt={review.student} />
                </div>
                <p className='text-gray-800 py-2 '>{review.txt}</p>
                <h4 className='text-xl text-black font-bold rounded font-kanit'>{review.student}</h4>
            </div>
        )
    })


    const parentReviewsCard = parentReviews.map((review, index) => {
        return (
            <div className='text-left font-molengo min-h-full mx-5 md:mx-0 flex-col gap-y-3 items-start justify-start p-3 shadow-md bg-green-50 ' key={index}>
                <div className='flex items-center justify-center relative'>
                    <Image src={`/images/reviews/${review.img}`} className='rounded-sm object-contain' width={600} height={700} alt={review.student} />
                </div>
                <p className='text-gray-800 py-2 '>{review.txt}</p>
                <h4 className='text-xl text-black font-bold rounded font-kanit'>{review.student}</h4>
            </div>
        )
    })




    return (
        <section>

            <div className='text-center bg-green-400 py-5 text-4xl text-white font-kanit mt-20'>Reviews</div>
            <div className='max-w-screen-lg mx-auto py-10'>
                <div className="flex justify-around items-center text-3xl font-kanit">
                    <button className=' py-2 font-kanit border-2 border-cyan-900 text-indigo-900 bg-gradient-to-r from-teal-100 hover:from-fuchsia-100 hover:to-teal-100 to-fuchsia-100 ease-in-out duration-300 transition shadow-2xl hover:text-cyan-900 cursor-pointer  rounded-lg mb-5 px-5' onClick={() => { setstu("Student") }}>Student Reviews</button>
                    <button className=' py-2 font-kanit border-2 border-cyan-900 text-indigo-900 bg-gradient-to-r from-teal-100 hover:from-fuchsia-100 hover:to-teal-100 to-fuchsia-100 ease-in-out duration-300 transition shadow-2xl hover:text-cyan-900 cursor-pointer rounded-lg mb-5 px-5' onClick={() => { setstu("Parent") }}>Parent Reviews</button>
                </div>


                <div className='grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center'>
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
