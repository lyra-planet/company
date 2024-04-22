import React from 'react'

const AboutUs = () => {
    const backgroundImage = `https://omo-oss-image1.thefastimg.com/portal-saas/new2022072714593122412/cms/image/678faee2-49e7-45e6-866e-d89c0a9da768.jpg`
    const list = [
        {img:"https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/1e54ce7e-b063-466e-82d2-366cee0fb5ae.png",title:"抗干扰技术 ",content:"潜心研究抗干扰技术30年，具备丰富的设计和现场经验，完成了多项严重干扰环境下的测试任务。"},
        {img:"https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/1e54ce7e-b063-466e-82d2-366cee0fb5ae.png",title:"抗干扰技术 ",content:"潜心研究抗干扰技术30年，具备丰富的设计和现场经验，完成了多项严重干扰环境下的测试任务。"},
        {img:"https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/1e54ce7e-b063-466e-82d2-366cee0fb5ae.png",title:"抗干扰技术 ",content:"潜心研究抗干扰技术30年，具备丰富的设计和现场经验，完成了多项严重干扰环境下的测试任务。"},
        {img:"https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/1e54ce7e-b063-466e-82d2-366cee0fb5ae.png",title:"抗干扰技术 ",content:"潜心研究抗干扰技术30年，具备丰富的设计和现场经验，完成了多项严重干扰环境下的测试任务。"},
    ]
    const asset = 'https://omo-oss-image.thefastimg.com/portal-saas/new2022072714593122412/cms/image/29eca6ce-3589-4eff-a261-da1f3331f2be.png'
    return (
        <div className='bg-red-400 h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed relative'
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='py-24 px-16 text-white flex flex-col h-full'>
                <div className='flex flex-row justify-between  items-baseline pb-16'>
                    <div>
                        <div className=' text-3xl pb-2'>关于我们</div>
                        <div className=' text-5xl'>开启智能科技发展新征程</div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className=' text-lg pb-1 text-gray-400 '>国家高新技术企业</div>
                        <div className=' text-lg text-gray-400'>专注于结构力学性能的智能化测试与分析系统研发和生产</div>
                    </div>
                </div>
                <div className='bg-white w-full rounded-3xl px-10  py-20 flex flex-row '>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index}  className='w-1/4 flex flex-col justify-center items-center text-black cursor-pointer px-6 group/item hover:-translate-y-4 transition-all duration-300'>
                                    <img src={item.img}
                                        alt="img"
                                        className=' group-hover/item:rotate-y-[180deg] transition-all duration-300'/>
                                    <div className='text-2xl pt-6'>{item.title}</div>
                                    <div className='text-sm pt-4 text-gray-500 font-light'>{item.content}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=' absolute bottom-0 left-0'>
                <img src={asset}/>
            </div>
        </div>
    )
}

export default AboutUs