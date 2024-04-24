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
        "/fourth.jpg",
        "/six.jpg",
    ]

    const Image = (props: ImageProps): JSX.Element => {
        return (
            <div className='h-full relative'>
                <div
                    className='bg-fixed w-full bg-cover   bg-center shadow-lg h-screen hover:brightness-75 transition-all duration-300'
                    style={{ backgroundImage: `url(${props.url})` }}
                />
            </div>
        );
    };
    return (
        <div className='relative w-full h-fit max-h-full'>
            <Carousel className='h-full max-h-full' autoplay>
                {
                    urlList.map((url,index) => (<Image key={index} url={url} />))
                }
            </Carousel >
            <div className='absolute h-full w-full top-0 left-0 text-5xl font-extrabold  flex justify-center font-lyra  items-center text-white flex-col'>
                <p className='p-2'>
                    强盛智云☁️
                </p>
                <p className='p-2'>
                工业设备监测诊断专家



                </p>
            </div>
        </div >
    )
}

export default _Carousel