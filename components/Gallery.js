import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { galleryIndex } from '@/utility/data'
import Image from 'next/image'
import Heading from './Heading'


const images = galleryIndex.map((review) =>
    `/images/gallery/${review.name}`)

class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 380: 1, 768: 2, 1024: 3 }}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <Image
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block", padding: "10px", borderRadius: "30px", }}
                            alt=""
                            width={500} height={500}
                            className=''

                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}


export const Gallery = () => {
    return (
        <section className='bg-gradient-to-r from-green-50 to-white'>
            <div className=' mt-20 pt-20 px-5 md:px-0 max-w-5xl mx-auto'>
                <Heading heading='OUR CHERISHED MEMORIES' subHeading='GALLERY' />

            </div>

            <div className='max-w-screen-lg ml-auto mr-auto pb-10  '>
                <MyWrapper />
            </div>


        </section>

    )
}


export default Gallery