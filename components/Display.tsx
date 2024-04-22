'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircleOutlined } from '@ant-design/icons';
const Display = () => {
    const url = 'https://img.jsdesign2.com/assets/img/64ed9ee31de0bafc4818574c.png#e27328d790d32a8f0caed0382e57868a'
    useEffect(() => {
    });
    return (
        <div className='pt-24 px-16 h-[600px]   '>
            <div className='flex flex-row justify-between h-full  transition-all duration-300 hover:shadow-lg rounded-3xl group/item'>
                    <div className='group-hover/item:w-2/3 transition-all duration-300 w-1/2 h-full flex flex-col justify-center px-16'>
                        <div className=' text-4xl font-bold pb-4'>多样化的网页设计和开发服务</div>
                        <div className='text-sm pb-10'>我们提供一站式的网页设计与开发服务，包括UI设计、前端开发、后台开发等，满足您的各种需求。</div>
                        <div className='flex flex-row justify-between pb-10'>
                            <div>
                                <p className='text-xl font-bold pb-2'>UI设计</p>
                                <p>我们拥有一支专业的UI设计团队，可以为您提供精美的网页设计。</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold pb-2'>UI设计</p>
                                <p>我们拥有一支专业的UI设计团队，可以为您提供精美的网页设计。</p>
                            </div>
                        </div>
                        <div className=' flex flex-row justify-start'>
                            <div className='px-4 py-2 bg-blue-500 text-white rounded-xl mr-4 cursor-pointer hover:shadow-lg  transition-all duration-300 hover:scale-110'>
                            了解更多
                            </div>
                            <div className='px-4 py-2 bg-gray-100 text-gray-500 rounded-xl cursor-pointer'>练习我们</div>
                        </div>
                    </div>
                    <div className='bg-blue-300 w-1/2 h-full bg-cover bg-center bg-no-repeat  relative'
                        style={{ backgroundImage: `url(${url})` }}
                    >
                    </div>
            </div>
        </div>
    )
}

export default Display