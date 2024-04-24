import React from 'react'
import { CommentOutlined } from '@ant-design/icons';
const Footer = () => {
    return (
        <>
        <div className='hidden md:block bg-blue-500 w-full py-16 px-10 text-white border-b border-white border-opacity-40'>
            <div className='flex flex-row justify-between'>
                <div className='w-1/3'>
                    <img src="/logo_white.jpg" alt="logo" width={200} height={200} />
                    <p className='text-xl py-1'>联系我们</p>
                    <p className='flex flex-row text-2xl items-center py-2'><CommentOutlined className='text-3xl pr-2' />13920961981</p>

                    <p className=' text-gray-200 font-light py-1'>邮箱：13920961981@163.com</p>
                    <p className=' text-gray-200 font-light py-1'>地址：天津市⻄⻘区精武镇学府中路与创源道交口科创服务中心1号楼311-32(开天⻄⻘园)</p>
                </div>
                <div className='flex flex-row w-3/5 justify-between'>
                    <div>
                        <p className='text-xl py-1'>产品中心</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>灵眸数据一体化处理平台</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>灵云数据云边端管理平台</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>灵智数据隐私计算平台</p>
                    </div>
                    <div>
                        <p className='text-xl py-1'>解决方案</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>在线式数采系统OMS9000系列产品 </p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>无线智能数据采集器OMS9000G系列</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>离线式振动测振仪PMS系列</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>数据隐私计算方案</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>数据采集储存解决方案</p>
                    </div>
                    <div>
                        <p className='text-xl py-1'>关于公司</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>公司简介</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>新闻中心</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>联系我们</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>在线留言</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>服务资质</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='bg-blue-500 w-full p-4 hidden md:flex flex-row text-white text-opacity-40 justify-between'>
            <div>
            <p>Copyright © 2024  强盛智云(天津)科技有限公司  All Rights Reserved.   津ICP备2024013214号-1    网站建设：cuteLyra </p>
            <p>基于故障诊断和健康管理的智能设备维保管理平台</p>
            </div>
            <p className='text-nowrap'>联系我们   |   法律声明</p>
        </div>
        <div className='block md:hidden bg-blue-500 w-full py-5 px-5 text-white border-b border-white border-opacity-40'>
            <div className='flex flex-row justify-between'>
                <div className='w-full'>
                    <img src="/logo_white.jpg" alt="logo" width={200} height={200} />
                    <p className='text-xl py-1'>联系我们</p>
                    <p className='flex flex-row text-2xl items-center py-2'><CommentOutlined className='text-3xl pr-2' />13920961981</p>
                    <p className=' text-gray-200 font-light text-sm '>邮箱：13920961981@163.com</p>
                    <p className=' text-gray-200 font-light text-sm '>地址：天津市⻄⻘区精武镇学府中路与创源道交口科创服务中心1号楼311-32(开天⻄⻘园)</p>
                </div>

            </div>
        </div>
        <div className='bg-blue-500 w-full p-4 flex md:hidden text-xs  text-white text-opacity-40 flex-col'>
            <p>Copyright © 2024  强盛智云(天津)科技有限公司  All Rights Reserved.   津ICP备2024013214号-1    网站建设：cuteLyra</p>
            <p>基于故障诊断和健康管理的智能设备维保管理平台</p>
            <p className='text-sm pt-5 text-nowrap'>联系我们   |   法律声明</p>
        </div>
        </>

    )
}

export default Footer





