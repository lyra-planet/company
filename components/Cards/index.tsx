import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import _Carousel from './Carousel';
const Cards = () => {
    const url = "/third.jpg"
    return (
        <div className='px-5 py-10 md:py-24 md:px-16 w-full md:h-[700px] bg-[#f9f9f9]'>
            <div className='hidden md:flex flex-row justify-evenly  transition-all duration-300 rounded-3xl group/item'>
                <div className='transition-all duration-300 w-1/2 h-full flex flex-col justify-center px-16 overflow-hidden relative '>
                    <div className='mb-4'>   <img src="/logo.png" alt="logo" width={150} height={150} /></div>
                    <div className=' text-3xl font-bold pb-4'>隆基研发中心 </div>
                    <div className='text-sm pb-10'>隆基拥有硅片、电池、 组件及解决方案研发中心，与新南威尔士大学、浙江大学国家硅材料实验室等科研院所建立战略合作关系，加强产学研合作与技术交流，为技术创新提供保障，并荣获国家级企业技术中心。</div>
                    <div className=' flex flex-row justify-start'>
                        <div className='px-4 py-2 bg-blue-500 text-white rounded-xl mr-4 cursor-pointer hover:shadow-lg  transition-all duration-300 hover:scale-110 group/button'>
                            了解更多<ArrowRightOutlined className=' 
                    group-hover/button:text-white group-hover/button:translate-x-0 text-transparent -translate-x-2 transition-al duration-300 w-0 group-hover/button:w-3' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full block relative'>
                    <_Carousel/>
                </div>
            </div>

            <div className='flex md:hidden flex-col justify-between h-full  transition-all duration-300  '>
                <div className=' transition-all duration-300 w-full flex flex-col justify-center px-4 py-6'>
                    <div className=' text-4xl font-bold pb-4'>隆基研发中心 </div>
                    <div className='text-sm pb-10'>隆基拥有硅片、电池、 组件及解决方案研发中心，与新南威尔士大学、浙江大学国家硅材料实验室等科研院所建立战略合作关系，加强产学研合作与技术交流，为技术创新提供保障，并荣获国家级企业技术中心。</div>
                    <div className=' flex flex-row justify-start'>
                    <div className='px-4 py-2 bg-blue-500 text-white rounded-xl mr-4 cursor-pointer hover:shadow-lg  transition-all duration-300 hover:scale-110 group/button'>
                            了解更多<ArrowRightOutlined className=' 
                    group-hover/button:text-white group-hover/button:translate-x-0 text-transparent -translate-x-2 transition-al duration-300 w-0 group-hover/button:w-3' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full block relative'>
                    <_Carousel/>
                </div>
            </div>

            <div className='grid grid-cols-2 grid-rows-2 md:hidden  bg-white w-full'>
                <div className=' py-10 flex justify-center items-center flex-col border-[#f9f9f9] border-r-2 border-b-2 ' >
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold pb-1'>4,000</div>
                        <div className='block w-10 font-light'>&lt;人&gt;</div>
                    </div>
                    <div className='text-opacity-80 font-light text-sm pt-4'>
                        研发人员
                    </div>
                </div>
                <div className='py-10 flex justify-center items-center flex-col border-[#f9f9f9] border-b-2' >
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold pb-2'>34.20</div>
                        <div className='block w-10 font-light'>&lt;亿&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light text-sm pt-4'>
                    2023年上半年研发投入
                    </div>
                </div>
                <div className='py-10 flex justify-center items-center flex-col border-[#f9f9f9] border-r-2 ' >
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold pb-1'>2,525</div>
                        <div className='block w-10 font-light'>&lt;项&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light text-sm pt-4'>
                    累积获得专利
                    </div>
                </div>
                <div className='py-10 flex justify-center items-center flex-col border-[#f9f9f9]' >
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold pb-1'>26.81</div>
                        <div className='block w-10 font-light'>&lt;%&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light text-sm pt-4'>
                    N型HJT 转化效率
                    </div>
                </div>
            </div>
            <div className='hidden md:flex flex-row justify-between bg-white w-full'>
                <div className='py-10 px-6 w-1/4 border-[#f9f9f9]  flex-grow-1' >
                    <div className='flex flex-row'>
                        <div className='text-5xl font-bold pb-2 pr-2'>4,000</div>
                        <div className='hidden lg:block lg:w-10 font-light '>&lt;人&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light'>
                        研发人员
                    </div>
                </div>
                <div className='py-10 px-6 border-l-2  w-1/4 border-[#f9f9f9]  flex-grow-1' >
                    <div className='flex flex-row'>
                        <div className='text-5xl font-bold pb-2 pr-2'>34.20</div>
                        <div className='hidden lg:block lg:w-10 font-light '>&lt;亿&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light'>
                    2023年上半年研发投入
                    </div>
                </div>
                <div className='py-10 px-6 border-l-2  w-1/4 border-[#f9f9f9]  flex-grow-1' >
                    <div className='flex flex-row'>
                        <div className='text-5xl font-bold pb-2 pr-2'>2,525</div>
                        <div className='hidden lg:block lg:w-10 font-light '>&lt;项&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light'>
                    累积获得专利
                    </div>
                </div>
                <div className='py-10 px-6 border-l-2  w-1/4 border-[#f9f9f9]  flex-grow-1' >
                    <div className='flex flex-row'>
                        <div className='text-5xl font-bold pb-2 pr-2'>26.81</div>
                        <div className='hidden lg:block lg:w-10 font-light '>&lt;%&gt;</div>
                    </div>
                    <div className=' text-opacity-80 font-light'>
                    N型HJT 转化效率
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards