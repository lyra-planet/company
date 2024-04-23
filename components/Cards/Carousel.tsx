'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';


interface ImageProps {
    url: string;
}

const _Carousel = () => {
    const urlList=[
        "/first.jpg",
        "/second.jpg",
        "/third.jpg",
    ]

    const Image = (props: ImageProps): JSX.Element => {
        return (
            <div className='h-full relative'>
                <div
                    className='bg-fixed w-full bg-cover   bg-center shadow-lg h-[408px] hover:brightness-75 transition-all duration-300'
                    style={{ backgroundImage: `url(${props.url})` }}
                />
            </div>
        );
    };
    return (
        <div className='relative w-full max-h-full'>
            <Carousel className='h-full max-h-full' autoplay>
                {
                    urlList.map((url,index) => (<Image key={index} url={url} />))
                }
            </Carousel >
        </div >
    )
}

export default _Carousel