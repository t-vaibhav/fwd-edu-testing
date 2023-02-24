import React from 'react'

export const Footer = () => {


    return (
        <footer className=''>
            <div className='bg-gray-100 p-5'>

                <div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-5 max-w-screen-lg ml-auto mr-auto'>

                    {/* upper section of footer */}
                    <div>
                        <h2 className='font-kanit text-3xl text-gray-700'>FORWARD EDUCATION</h2>
                        <p className='pb-6 font-molengo text-gray-500 max-w-[160px]'>A-2/29, Second Floor,
                            Prateek Apartments,
                            Paschim Vihar,
                            New Delhi - 110063</p>
                    </div>


                    <div>

                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[10px] '>CONTACT</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[15px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 font-molengo'><strong>Phone: </strong>9810763856</p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[15px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 font-molengo'><strong>Email: </strong>meenu.ca@gmail.com</p>
                        </div>
                    </div>


                    <div>
                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[90px]'>Useful Links</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Home</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">About Us</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Subjects</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Teachers</a></p>
                        </div>
                    </div>


                    <div>
                        <h5 className='font-bold text-gray-700 pb-3 lg:pl-[90px]'>Links</h5>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Gallery</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Results</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Reviews</a></p>
                        </div>
                        <div className='flex items-center lg:mb-3 lg:pl-[95px]'>
                            <img src="/images/right-arrow.png" alt="" className='h-3 pr-2' /><p className='text-gray-500 hover:underline font-molengo'><a href="">Contact</a></p>
                        </div>
                    </div>

                </div>
            </div>

            {/* lower section of footer */}

            <div className='bg-gray-300 p-5'>

                <div className='max-w-screen-lg ml-auto mr-auto sm:flex sm:justify-between sm:items-center  '>
                    <div className='text-center sm:text-left'>
                        &copy; Copyright <strong><span>Forward Education</span></strong>. All Rights Reserved <br /> Developed & Maintained by <a href="#" className='text-green-600 hover:underline hover:text-green-800'>Chaitanya Anand </a >
                    </div>

                    <div className='flex items-center justify-center sm:inline'>
                        <a href=""><img src="/images/instagram.png" alt="" className='h-10 hover:opacity-70' /></a>
                    </div>
                </div>
            </div>

        </ footer >)

}


export default Footer