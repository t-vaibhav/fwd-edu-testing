import React from 'react'

export const Heading = (props) => {
    return (
        <div className=''>
            <p className='inline text-base text-gray-400'>{props.heading}</p><div className='inline-flex align-middle h-[1px] w-[10%] border border-green-300 mx-4'></div>
            <h3 className='text-4xl font-bold font-kanit text-slate-800 mb-5'>{props.subHeading}</h3>
        </div >
    )
}

export default Heading
