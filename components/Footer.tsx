import React from 'react'
import { CommentOutlined } from '@ant-design/icons';
const Footer = () => {
    return (
        <>
        <div className='hidden md:block bg-blue-500 w-full py-16 px-10 text-white border-b border-white border-opacity-40'>
            <div className='flex flex-row justify-between'>
                <div className='w-1/3'>
                    <img src="/logo_white.png" alt="logo" width={200} height={200} />
                    <p className='text-xl py-1'>联系我们</p>
                    <p className='flex flex-row text-2xl items-center py-2'><CommentOutlined className='text-3xl pr-2' />400-XXXX-228</p>
                    <p className=' text-gray-200 font-light py-1'>传真：0523-84892XXX</p>
                    <p className=' text-gray-200 font-light py-1'>邮箱：dhc@XXXXX.com</p>
                    <p className=' text-gray-200 font-light py-1'>地址：江苏省泰州靖江市新港大道208号</p>
                </div>
                <div className='flex flex-row w-3/5 justify-between'>
                    <div>
                        <p className='text-xl py-1'>产品中心</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>结构力学性能研究</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>自定义测控分析系统</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>结构安全在线监测</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>设备的故障预测与健康管理</p>
                    </div>
                    <div>
                        <p className='text-xl py-1'>解决方案</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>结构疲劳寿命分析 </p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>结构动力学分析</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>旋转机械分析</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>声学分析</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>外力对结构的分析</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>PHM解决方案</p>
                    </div>
                    <div>
                        <p className='text-xl py-1'>关于公司</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>公司简介</p>
                        <p className=' text-gray-200  py-1 hover:text-white transition-all duration-300 cursor-pointer'>新闻中心</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>在线课堂</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>联系我们</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>在线留言</p>
                        <p className=' text-gray-200 py-1 hover:text-white transition-all duration-300 cursor-pointer'>服务资质</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='bg-blue-500 w-full p-4 hidden md:flex flex-row text-white text-opacity-40 justify-between'>
            <div>
            <p>Copyright © 2022  江苏东华测试技术股份有限公司  All Rights Reserved.   苏ICP备18042773号-1    网站建设：中企动力  常州   SEO</p>
            <p>基于故障诊断和健康管理的智能设备维保管理平台</p>
            </div>
            <p>联系我们   |   法律声明</p>
        </div>
        <div className='block md:hidden bg-blue-500 w-full py-5 px-5 text-white border-b border-white border-opacity-40'>
            <div className='flex flex-row justify-between'>
                <div className='w-full'>
                    <img src="/logo_white.png" alt="logo" width={200} height={200} />
                    <p className='text-xl py-1'>联系我们</p>
                    <p className='flex flex-row text-2xl items-center py-2'><CommentOutlined className='text-3xl pr-2' />400-XXXX-228</p>
                    <p className=' text-gray-200 font-light text-sm '>传真：0523-84892XXX</p>
                    <p className=' text-gray-200 font-light text-sm '>邮箱：dhc@XXXXX.com</p>
                    <p className=' text-gray-200 font-light text-sm '>地址：江苏省泰州靖江市新港大道208号</p>
                </div>

            </div>
        </div>
        <div className='bg-blue-500 w-full p-4 flex md:hidden text-xs  text-white text-opacity-40 flex-col'>
            <p>Copyright © 2022  江苏东华测试技术股份有限公司  All Rights Reserved.   苏ICP备18042773号-1    网站建设：中企动力  常州   SEO</p>
            <p>基于故障诊断和健康管理的智能设备维保管理平台</p>
            <p className='text-sm pt-5'>联系我们   |   法律声明</p>
        </div>
        </>

    )
}

export default Footer





