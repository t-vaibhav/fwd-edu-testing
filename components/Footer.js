import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {


    return (
        <footer className=''>
            <div className='bg-gray-100 p-5'>

                <div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-5 max-w-screen-lg ml-auto mr-auto'>

                    {/* upper section of footer */}
                    <div>
                        <h2 className='font-kanit text-3xl text-gray-700'>FORWARD EDUCATION</h2>
                        <p className='pb-6 font-molengo text-gray-500 md:max-w-[300px] max-w-[350px]'>A-2/29, Second Floor,
                            Prateek Apartments,
                            Paschim Vihar,
                            New Delhi - 110063</p>
                        <p className='pb-6 sm:pb-1 font-molengo text-gray-500 md:max-w-[300px] max-w-[350px]'>
                            T-2, Ansal Utility Complex, Near Jwala Heri Haldiram, Paschim Vihar, New Delhi - 110063</p>
                    </div>


                    <div>

                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[10px] '>CONTACT</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[15px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 font-molengo'><strong>Phone: </strong>9810763856</p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[15px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 font-molengo'><strong>Email: </strong>meenu.ca@gmail.com</p>
                        </div>
                    </div>


                    <div>
                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[90px]'>Useful Links</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/">Home</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/#about">About Us</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/#popular-courses">Subjects</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/#teachers">Teachers</Link></p>
                        </div>
                    </div>


                    <div>
                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[90px]'>Links</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/gallery">Gallery</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/results">Results</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/reviews">Reviews</Link></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <Image src="/images/right-arrow.png" alt="" className='h-3 pr-2' width={20} height={12} /><p className='text-gray-500 hover:underline font-molengo'><Link href="/contact">Contact</Link></p>
                        </div>
                    </div>

                </div>
            </div>

            {/* lower section of footer */}

            <div className='bg-gray-300 p-5'>

                <div className='max-w-screen-lg ml-auto mr-auto sm:flex sm:justify-between sm:items-center  '>
                    <div className='text-center sm:text-left'>
                        &copy; Copyright <strong><span>Forward Education</span></strong>. All Rights Reserved <br /> Developed & Maintained by <Link href="#" className='text-green-600 hover:underline hover:text-green-800'>Chaitanya Anand </Link >
                    </div>

                    <div className='flex items-center justify-center sm:inline'>
                        <Link href=""><Image src="/images/instagram.png" alt="" className='h-10 hover:opacity-70' width={40} height={100} /></Link>
                    </div>
                </div>
            </div>

        </ footer >)

}


export default Footer