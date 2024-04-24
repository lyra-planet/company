import React from 'react'
import { MonitorOutlined, HddOutlined, FundViewOutlined, ClusterOutlined} from '@ant-design/icons';
const AboutUs = () => {
    const backgroundImage = `/nine.jpg`
    const list = [
        {img:()=>(<MonitorOutlined />),title:"在线数据采集 ",content:"持续监测机器状态，实时捕获并分析关键运行数据，确保信息准确无误，为设备健康提供了全面的数据支持。"},
        {img:()=>(<HddOutlined />),title:"智能数据分析 ",content:"依托于自主研发的MDBase数据库和多种信号处理技术，能迅速识别设备异常，预防故障发生，提高设备可靠性和安全性。"},
        {img:()=>(<FundViewOutlined />),title:"便携式监测技术 ",content:"采用前沿的ssl检测技术，我们的便携式监测站能够进行快速诊断和初步判断，极大地提高了现场工程师的工作效率。"},
        {img:()=>(<ClusterOutlined />),title:"设备维修管理云平台 ",content:"结合大数据分析和云计算技术，设备预知维修管理云平台实现设备的实时监控和预测性维护，优化决策降低成本。"},
    ]
    const asset = 'https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/29eca6ce-3589-4eff-a261-da1f3331f2be.png'
    return (
        <div className='bg-blue-500 md:min-h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed relative' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='py-24 px-16 text-white hidden md:flex flex-col h-full'>
                <div className='flex flex-row justify-between  items-baseline pb-16'>
                    <div>
                        <div className=' text-3xl pb-2'>关于我们</div>
                        <div className=' text-5xl'>开启智能科技发展新征程</div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className=' text-md pb-1 text-gray-400 '>国家高新技术企业</div>
                        <div className=' text-md text-gray-400'>专注于解决工业物联生产感知和数据分析管理决策问题</div>
                    </div>
                </div>
                <div className='bg-white w-full rounded-3xl px-10  py-20 flex flex-row '>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index}  className='w-1/4 flex flex-col  items-center text-black cursor-pointer px-6 group/item hover:-translate-y-4 transition-all duration-300'>
                                    <div className=' group-hover/item:rotate-y-[180deg] transition-all duration-300 text-5xl text-blue-500'>{item.img()}</div> 
                                    <div className='text-2xl pt-6 text-nowrap'>{item.title}</div>
                                    <div className='text-sm pt-4 text-gray-500 font-light '>{item.content}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='py-10 px-5 text-white flex md:hidden flex-col h-full'>
                <div className='flex flex-col justify-between  items-baseline pb-5'>
                        <div className=' text-xl pb-1'>关于我们</div>
                        <div className=' text-2xl'>开启智能科技发展新征程</div>
                </div>
                <div className='bg-white w-full rounded-3xl px-4  py-4 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-10'>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index}  className=' flex flex-col justify-center items-center text-black cursor-pointer  group/item hover:-translate-y-4 transition-all duration-300'>
                                    <div className=' group-hover/item:rotate-y-[180deg] transition-all duration-300 text-5xl text-blue-500'>{item.img()}</div> 
                                    <div className='text-xl pt-6'>{item.title}</div>
                                    <div className='text-xs pt-4 text-gray-500 font-light'>{item.content}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=' absolute bottom-0 left-0  w-full'>
                <img src={asset} className='w-full'/>
            </div>
        </div>
    )
}

export default AboutUs