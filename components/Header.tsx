'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchOutlined,RobotOutlined,MenuOutlined,UserOutlined} from '@ant-design/icons'
const Header = () => {
    return (
        <div className='fixed w-full top-0 bg-white md:p-5 p-4  flex flex-row justify-between z-50
    transition-al duration-300 bg-opacity-100 shadow-lg h-20'>
            <div className="pr-10 flex flex-row items-center">
                <img src="/logo.jpg" width={200} alt="logo" />
            </div>
            <div className="flex flex-row justify-end md:justify-between lg:w-3/5 md:w-4/5 w-full items-center">
            <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="/">主页</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="/products">产品中心</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="http://118.25.85.189:8086/index.html">数据大屏</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="http://118.25.85.189:8019/">数据平台</Link></div>
                <div className=" transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="https://share.fastgpt.in/chat/share?shareId=0iags44jjpml7pdxacicptlt">灵眸AI</Link></div>
                <div className=" transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="/">投资关系</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="/">强盛智云</Link></div>
                <div className=" bg-blue-500 p-3 text-white rounded-3xl hover:cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300 hidden md:block">登录与注册</div>
                <div className='pr-5 md:hidden'><SearchOutlined className='text-xl' /></div>
                <div className='pr-5 md:hidden'>
                <Link href="https://share.fastgpt.in/chat/share?shareId=0iags44jjpml7pdxacicptlt">
                <RobotOutlined className='text-xl' />
                </Link>
                </div>
                <div className='pr-5 md:hidden'><UserOutlined className='text-xl' /></div>
                <div className='pr-5 md:hidden'><MenuOutlined className='text-xl' /></div>
            </div>
        </div>
    )
}

export default Header