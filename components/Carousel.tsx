'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';


interface ImageProps {
    url: string;
}

const _Carousel = () => {


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
                <Image url={"https://www.chnmuseum.cn/shxg/wwmt/202207/W020220721376938122860.jpg"} />
                <Image url={"https://www.chnmuseum.cn/shxg/wwmt/202210/W020221026559113804110.jpg"} />
                <Image url={"https://www.chnmuseum.cn/shxg/wwmt/202206/W020220701324482617325.jpg"} />
            </Carousel >
            <div className='absolute h-full w-full top-0 left-0 text-5xl font-extrabold  flex justify-center font-lyra  items-center text-white flex-col'>
                <p className='p-2'>
                    强盛智云☁️
                </p>
                <p className='p-2'>
                    专业服务提供商
                </p>
            </div>
        </div >
    )
}

export default _Carousel