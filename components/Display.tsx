'use client'
import React, { useEffect, useState } from 'react'
const Display = () => {
    const url = "/seven.jpg"
    useEffect(() => {
    });
    return (
        <div className='px-5 pt-10 md:pt-24 md:px-16 w-full md:min-h-[600px]'>
            <div className='hidden md:flex flex-row justify-between h-full  transition-all duration-300 hover:shadow-lg rounded-3xl group/item'>
                <div className='group-hover/item:w-2/3 transition-all duration-300 w-1/2 h-full flex flex-col justify-center px-16 overflow-hidden relative py-14'>
                    <div className=' text-3xl font-bold pb-4'>多元化工业数据和智能化解决方案
                    </div>
                    <div className='text-sm pb-10 text-neutral-600 '>为了推进新一代信息技术与制造业深度融合，助力智能制造赋能传统行业，解决企业的工业物联生产感知和数据分
                        析管理决策问题。我们致力于为工业生产制造领域企业提供工业数据服务以及一站式智能解决方案，满足您的各种
                        需求。
                    </div>
                    <div className='flex flex-row justify-between pb-10'>
                        <div>
                            <p className='text-xl font-bold pb-2 w-1/2 text-nowrap'>个性化分析</p>
                            <p className='text-neutral-600'>我们拥有专业的设计团队和高精度、高保密性的隐私计算平台，可以为您分析设计最合适的工业物联生态。</p>
                        </div>
                        <div>
                            <p className='text-xl font-bold pb-2 w-1/2 text-nowrap'>一站式打造</p>
                            <p className='text-neutral-600'> 我们配备有专业的打造团队和成体系的工业物联生态，能够根据您的需求一站式打造工业生产制造新模态。
                            </p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-start'>
                        <div className='px-4 py-2 bg-blue-500 text-white rounded-xl mr-4 cursor-pointer hover:shadow-lg  transition-all duration-300 hover:scale-110'>
                            了解更多
                        </div>
                        <div className='px-4 py-2 bg-gray-100 text-gray-500 rounded-xl cursor-pointer'>联系我们</div>
                    </div>
                </div>
                <div className='w-1/2 flex  bg-cover bg-center bg-no-repeat relative rounded-r-3xl'
                    style={{ backgroundImage: `url(${url})` }}
                >
                </div>
            </div>
            <div className='flex md:hidden flex-col justify-between h-full  transition-all duration-300 shadow-lg rounded-3xl group/item '>
                <div className=' transition-all duration-300 w-full flex flex-col justify-center px-4 py-6'>
                    <div className=' text-4xl font-bold pb-4'>多元化工业数据和智能化解决方案
                    </div>
                    <div className='text-sm pb-10 text-neutral-600'>为了推进新一代信息技术与制造业深度融合，助力智能制造赋能传统行业，解决企业的工业物联生产感知和数据分
                        析管理决策问题。我们致力于为工业生产制造领域企业提供工业数据服务以及一站式智能解决方案，满足您的各种
                        需求。
                    </div>
                    <div className='flex flex-row justify-between pb-10'>
                        <div>
                            <p className='text-xl font-bold pb-2'>个性化分析</p>
                            <p className='text-neutral-600'> 我们拥有专业的设计团队和高精度、高保密性的隐私计算平台，可以为您分析设计最合适的工业物联生态。</p>
                        </div>
                        <div>
                            <p className='text-xl font-bold pb-2'>一站式打造</p>
                            <p className='text-neutral-600'> 我们配备有专业的打造团队和成体系的工业物联生态，能够根据您的需求一站式打造工业生产制造新模态。
                            </p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-start'>
                        <div className='px-4 py-2 bg-blue-500 text-white rounded-xl mr-4 cursor-pointer hover:shadow-lg  transition-all duration-300 hover:scale-110'>
                            了解更多
                        </div>
                        <div className='px-4 py-2 bg-gray-100 text-gray-500 rounded-xl cursor-pointer'>联系我们</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display