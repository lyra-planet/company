'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    const [top, setTop] = useState(true)

    const handleScroll = () => {
        const isTop = window.scrollY < 50; // 以50px为阈值判断是否接近顶部
        if (isTop !== top) {
            setTop(isTop);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    return (
        <div className={`fixed w-full top-0 bg-white md:p-5 p-4  flex flex-row justify-between z-50
    transition-al duration-300 ` + (top ? 'bg-opacity-0 text-white ' : 'bg-opacity-100 shadow-lg')}>
            <div className="pr-10 flex flex-row items-center">
                <img src="/logo.png" alt="logo" width={200}  height={200} />
            </div>
            <div className="flex flex-row justify-between lg:w-3/5 md:w-4/5 w-full items-center">
                <div className="transition-all duration-300 hover:text-blue-500">
                    <Link href="#">产品中心</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500">
                    <Link href="#">解决方案</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="#">应用案例</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="#">业务领域</Link></div>
                <div className=" transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="#">服务支持</Link></div>
                <div className=" transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="#">投资关系</Link></div>
                <div className="transition-all duration-300 hover:text-blue-500 hidden md:block">
                    <Link href="#">强盛智云</Link></div>
                <div className=" bg-blue-500 p-3 text-white rounded-3xl hover:cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300">登录与注册</div>
            </div>
        </div>
    )
}

export default Header