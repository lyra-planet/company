'use client'
import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
const Bar = () => {
    const url = "/fifth.jpg"
    useEffect(() => {
    });
    return (
        <div className=' w-full mt-10 md:h-[350px] md:mt-24 bg-cover bg-center bg-no-repeat overflow-hidden group/item relative'
        >
            <img src={url} className='w-full h-full object-cover group-hover/item:scale-150 transition-all duration-300' alt="" />
            <div className='absolute w-full h-full flex top-0 left-0 text-white py-10 px-5 md:py-24  md:px-16'>
                <div>
                    <div className='text-4xl font-extrabold flex flex-col'>
                        <p>技术创新</p>
                        <p className='inline max-w-fit bg-white text-4xl font-extrabold h-1.5 text-opacity-0 text-transparent mb-8 mt-4'>技术创新</p>
                    </div>

                    <div className=' border-white border-2 px-10 py-4 cursor-pointer transition-al duration-300 group/button hover:bg-white hover:text-black'>进入创新实验室<ArrowRightOutlined className=' 
                    group-hover/button:text-black group-hover/button:translate-x-0 text-transparent -translate-x-2 transition-al duration-300 w-0 group-hover/button:w-4' /></div>
                </div>
            </div>
        </div>
    )
}

export default Bar