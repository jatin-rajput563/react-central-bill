import React from 'react'
import logo from '../images/svg/footer-logo.svg'
import CommonPara from './common/CommonPara'
import { FACEBOOK, INSTAGRAM, LINKDIN, TWITER } from '../utils/icon'
import CommonHeadText from './common/CommonHeadText'
import CommonButton from './common/CommonButton'
import joinRight from '../images/png/join-right-img.png'
import joinleft from '../images/png/join-left-img.png'

const Footer = () => {
    return (
        <div className="bg-[url(../src/images/png/footer-bg.png)] bg-cover bg-center bg-no-repeat">
            <div className='max-w-[1140px] w-full py-[54px] flex flex-col mx-auto bg-[#EAF9FF] rounded-[4px] relative translate-y-[-50%]'>
                <img className='max-w-[300px] w-full absolute top-0 right-0' src={joinRight} alt="" />
                <img className='max-w-[300px] w-full absolute bottom-0 left-0' src={joinleft} alt="" />
                <CommonHeadText HeadText="Join Our" SpanText="Newsletter" HeadClass="!text-black text-center" />
                <CommonPara text="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for
                 our newsletter and never miss out on great savings opportunities again." textClass="max-w-[620px] !text-black text-center mx-auto pt-[16px]" />
                <div className='relative max-w-[476px] flex w-full mx-auto mt-[38px]'>
                    <input type="text" className='bg-white w-full max-w-[476px] h-[66px] rounded-[100px] rounded-tl-[0] !rounded-bl-[70px] pl-[22px] font-normal text-[16px] leading-[110%] family' placeholder='Start typing your address' />
                    <CommonButton btnText="Compare" btnClass="!bg-[#007EA7] absolute" />
                </div>
            </div>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className='flex justify-between flex-wrap'>
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <CommonPara text="Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. " textClass="leading-[150%] max-w-[297px] opacity-75 pt-[28px]" />
                        <div>
                            <p className='font-bold text-[20px] leading-[100%] text-white family  pt-[36px]'>Follow Us</p>
                            <div className='mt-[16px] flex gap-[15.39px]'>
                                <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full hover:scale-[1.2] transition-all'>
                                    <a href="#" target='blank'>
                                        <LINKDIN />
                                    </a>
                                </div>
                                <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full hover:scale-[1.2] transition-all'>
                                    <a href="#" target='blank'>
                                        <INSTAGRAM />
                                    </a>
                                </div>
                                <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full hover:scale-[1.2] transition-all'>
                                    <a href="#" target='blank'>
                                        <FACEBOOK />
                                    </a>
                                </div>
                                <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full hover:scale-[1.2] transition-all'>
                                    <a href="#" target='blank'>
                                        <TWITER />
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex gap-[78px] max-[640px]:pt-[40px]'>
                        <div>
                            <p className='font-bold text-[20px] leading-[150%] text-white family pb-[12px]'>Quick Link</p>
                            <ul className='flex flex-col gap-[14px]'>
                                <li>
                                    <a href="#">
                                        <CommonPara text="About" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="How It Works" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="Services" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="Testimonials" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="Why Us" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="FAQ" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-bold text-[20px] leading-[150%] text-white family pb-[12px]'>Services</p>
                            <ul className='flex flex-col gap-[14px]'>
                                <li>
                                    <a href="#">
                                        <CommonPara text="Privacy Policy" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <CommonPara text="Terms of Services" textClass="leading-[100%] opacity-90 hover:underline transition-all" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border border-[#35607E] mt-[56.55px]"></div>
            <p className='font-normal text-[14px] leading-[150%] text-white text-center py-[20px]'>© 2025 BILL CENTRAL, Inc. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
