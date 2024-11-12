import Image from 'next/image'
import React from 'react'

const Galery = () => {
    return (
        <div className='flex w-full h-full justify-center'>
            <section className='flex w-60 h-full'>
                <Image
                    src="/Rugrats-Twins-Birthday-Invitation.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
                <Image
                    src="/Rainbow-High-Birthday-Video-Invitation-Animated.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
                <Image
                    src="/Rugrats-Twins-Birthday-Invitation.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
                <Image
                    src="/Rainbow-High-Birthday-Video-Invitation-Animated.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
                <Image
                    src="/Rugrats-Twins-Birthday-Invitation.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
                <Image
                    src="/Rainbow-High-Birthday-Video-Invitation-Animated.webp"
                    width={1000}
                    height={1000}
                    alt='logo'
                    className='galery_img'
                />
            </section>

        </div>
    )
}

export default Galery