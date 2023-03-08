import React from 'react'
import Image from 'next/image'
export const Whyus = () => {
    // const style = {
    //     position: 'absolute',
    //     top: '1811px',
    //     right: '0',
    //     left: '0'
    // }
    return (
        <section className="bg-white ">

            <section className="max-w-screen-lg ml-auto mr-auto gap-1 md:gap-2.5 z-50">

                <div className='bg-green-400 p-5 rounded-md m-2 text-center'>
                    <h2 className='text-3xl font-bold font-kanit text-white'>Why choose FORWARD EDUCATION? </h2>
                    <br />
                    <p className='text-white font-molengo'>
                        FORWARD EDUCATION has developed a <span> <b>unique philosophy</b> </span>  of coaching, which focus on methods that avoid the necessity for mugging up in order to stimulate students' intellects, allowing them to face examinations confidently and succeed with flying colours.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 md:grid-rows-1 grid-rows-3  px-1'>
                    <div className='p-1 md:p-5 md:rounded-md md:border-slate-400 md:border md:border-solid shadow-lg md:shadow-none m-1 md:m-2 flex-col items-center text-center mb-5'>
                        <div className='h-20 w-20 relative bg-lime-200 rounded-full flex items-center justify-center mx-auto'>
                            <Image src="/images/invoice.png" width={40} height={40} alt="" className='h-2/4 w-2/4' />
                        </div>
                        <br />
                        <h4 className='text-xl font-bold font-kanit text-gray-700'>Smart Learning</h4>
                        <br />
                        <p className='font-molengo text-gray-500'>Teaching through overhead projector, visual slides and presentation of notes.</p>

                    </div>

                    <div className='p-1 md:p-5 md:rounded-md md:border-slate-400 md:border md:border-solid shadow-lg md:shadow-none m-1 md:m-2 flex-col items-center text-center mb-5'>
                        <div className='h-20 w-20 bg-lime-200 rounded-full flex items-center justify-center mx-auto'>
                            <Image src="/images/3d-cube.png" alt="" width={40} height={40} className='h-2/4 w-2/4' />
                        </div>
                        <br />
                        <h4 className='text-xl font-bold font-kanit text-gray-700'>Regular Practice</h4>
                        <br />
                        <p className='font-molengo text-gray-500'>Rigorous practice through regular assignments and tests. Special doubt-clearing and correction sessions.</p>
                    </div>

                    <div className='p-1 md:p-5 md:rounded-md md:border-slate-400 md:border md:border-solid shadow-lg md:shadow-none m-1 md:m-2 flex-col items-center text-center mb-5'>
                        <div className='h-20 w-20 bg-lime-200 rounded-full flex items-center justify-center mx-auto'>
                            <Image src="/images/copy.png" alt="" width={40} height={40} className='h-2/4 w-2/4' />
                        </div>
                        <br />
                        <h4 className='text-xl font-bold font-kanit text-gray-700'>Adaptive Teaching</h4>
                        <br />
                        <p className='font-molengo text-gray-500'>Offline, Online and Hybrid classes as per students convenience.</p>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Whyus
