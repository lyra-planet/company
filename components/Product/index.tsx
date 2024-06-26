'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircleOutlined } from '@ant-design/icons';
const Product = () => {
    const urlList = [
        "https://omo-oss-image1.thefastimg.com//portal-saas/new2022072714593122412/cms/image/c937eb1c-7ff4-4b8e-a0c8-9e523b0a2928.jpg",
        "https://omo-oss-image1.thefastimg.com//portal-saas/new2022072714593122412/cms/image/78c52cba-25ba-4c29-b033-f5717e1a53b9.jpg",
        "https://omo-oss-image1.thefastimg.com//portal-saas/new2022072714593122412/cms/image/5581bddb-85d8-4215-883b-de53237c3c65.jpg",
        "https://omo-oss-image1.thefastimg.com//portal-saas/new2022072714593122412/cms/image/826e909e-b51f-422e-ac1f-4adef640b618.jpg"
    ]
    const textList = [
        "物联设备测控系统",
        "设备故障分析系统",
        "数据一体化处理平台",
        "数据云边端管理平台"
    ]
    useEffect(() => {
    });
    return (
        <div className='py-10 px-5 md:py-24 md:px-16'>
            <div className='hidden md:flex flex-col justify-between '>
                <div className='flex flex-row justify-between items-baseline'>
                    <div>
                        <div className='text-blue-500  text-3xl pb-2'>产品中心</div>
                        <div className='text-5xl pb-10  text-nowrap'>工业物联生产感知解决方案</div>
                    </div>
                    <div  className='flex flex-col items-end'>
                        <div className=' text-md pb-1 text-gray-400'>入驻天开高教科创园</div>
                        <div className=' text-md text-gray-400 '>专注于解决工业物联生产感知和数据分析管理决策问题</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    {
                        urlList.map((item, index) => {
                            return (
                                <div key={index} className='flex-grow border box-border h-[500px] border-white  hover:flex-grow-[2]  transition-all duration-300 cursor-pointer bg-cover bg-center bg-no-repeat group/item relative'
                                    style={{ backgroundImage: `url(${item})` }}
                                >
                                    <div className='bg-blue-500 bg-opacity-90  h-5/6  rounded-br-[40px]  flex-col items-center p-10 text-white group-hover/item:scale-x-[100%] origin-left  scale-x-0 w-1/3 flex    transition-all duration-300'>
                                        <p className=' tracking-widest text-xl' style={{ writingMode: 'vertical-lr' }} >{textList[index]}<PlayCircleOutlined className='pt-4' /></p>
                                    </div>
                                    <p className='pt-10 tracking-widest text-xl absolute top-0 left-0 w-full h-full flex justify-start items-center text-white group-hover/item:scale-x-0  transition-all duration-300' style={{ writingMode: 'vertical-lr' }} >{textList[index]}<PlayCircleOutlined className='pt-4' /></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex md:hidden flex-col justify-between '>
                <div className='flex flex-col justify-between items-baseline'>
                        <div className='text-blue-500  text-xl pb-1'>产品中心</div>
                        <div className='text-3xl pb-5'>工业物联生产感知解决方案</div>
                </div>
                <div className='flex flex-row w-full'>
                    {
                        urlList.map((item, index) => {
                            return (
                                <div key={index} className='flex-grow border box-border h-[500px] border-white   transition-all duration-300 cursor-pointer bg-cover bg-center bg-no-repeat group/item relative'
                                    style={{ backgroundImage: `url(${item})` }}
                                >
                                    <p className='pt-10 tracking-widest text-xl absolute top-0 left-0 w-full h-full flex justify-start items-center text-white group-hover/item:scale-x-0  transition-all duration-300' style={{ writingMode: 'vertical-lr' }} >{textList[index]}<PlayCircleOutlined className='pt-4 text-3xl' /></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product