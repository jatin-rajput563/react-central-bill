import React from 'react'
import mainImg from '../images/png/energy-mian-img.png'
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'

const Energy = () => {
    return (
        <>
            <div className="py-[150px] max-lg:py-[70px]">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-row flex-wrap -mx-3 ">
                        <div className="w-full min-lg:w-6/12">
                            <img className='max-lg:mx-auto flex' src={mainImg} alt="main-img" />
                        </div>
                        <div className="w-full min-lg:w-6/12 max-lg:mt-[40px]">
                            <CommonHeadText HeadText="Made Simple" FrontSpan="Switching Energy" HeadClass=" !text-black max-w-[409px] max-lg:text-center max-lg:mx-auto max-lg:mt-[20px] max-lg:text-[43px]" />
                            <CommonPara text="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." textClass=" !text-[#00171F] max-w-[558px] !leading-[150%] pt-[16px] max-lg:text-center mx-auto max-lg:!text-[14px]" />
                            <p className='font-normal family text-[24px] leading-[110%] text-[#003459] m-0 pt-[38px] max-lg:text-center mx-auto max-lg:mt-[20px] max-lg:!text-[20px] '>Benefits of Comparing Energy Plans</p>
                            <div className='max-lg:justify-center max-lg:flex max-lg:items-center'>
                                <ul className='list-disc pt-[28px] pl-[22px] max-lg:pl-[46px]'>
                                    <li>
                                        <p className='font-normal text-[16px] leading-[150%] text-[#00171F] m-0 family'>Save money by finding cheaper deals.</p>
                                    </li>
                                    <li>
                                        <p className='font-normal text-[16px] leading-[150%] text-[#00171F] m-0 family'>Get better customer service.</p>
                                    </li>
                                    <li>
                                        <p className='font-normal text-[16px] leading-[150%] text-[#00171F] m-0 family'>Explore greener, more sustainable energy options.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Energy
