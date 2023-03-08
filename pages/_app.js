import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";
import React, { useState, useEffect } from 'react';
// import Popup from '@/components/Popup';
import Link from 'next/link'







function App({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      {showPopup && <div className='h-full w-full popup backdrop-blur-sm   z-20'>
        <div className='z-50'>

          <div className="popup text-center lg:w-3/5 md:w-4/6 w-4/5 md:text-2xl text-lg font-kanit font-semibold text-gray-700 z-40 lg:p-[110px] p-12 bg-white">

            <p className='backdrop-blur-0'>Admissions open for academic year 2023-24 ✨</p>
            <p className=''>Special offer for first 10 admissions!.</p>
            <button className=' bg-red-500 py-2 mt-16 px-6 text-neutral-200 rounded-sm  hover:bg-red-400 ' onClick={() => setShowPopup(!showPopup)}> <Link href="https://forms.gle/XfDyjjVeEXCY8VUq6" target="_blank" >Enroll Now!</Link></button>
            <div className='text-blue-500 text-xl my-2 font-molengo hover:underline hover:text-blue-700 cursor-pointer' onClick={() => setShowPopup(!showPopup)}>close</div>
          </div>
        </div >
      </div>}


      <Component {...pageProps} />
    </>
  );
}
export default App;