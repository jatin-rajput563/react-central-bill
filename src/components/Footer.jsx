import React from 'react'
import logo from '../images/svg/footer-logo.svg'
import CommonPara from './common/CommonPara'
import { FACEBOOK, INSTAGRAM, LINKDIN, TWITER } from '../utils/icon'

const Footer = () => {
    return (
        <div className="min-h-screen bg-[url(../src/images/png/footer-bg.png)] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[1140px] mx-auto px-3">
                <div>
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" />
                            <CommonPara text="Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. " textClass="leading-[150%] max-w-[297px] opacity-75 pt-[28px]" />
                            <div>
                                <p className='font-bold text-[20px] leading-[100%] text-white family  pt-[36px]'>Follow Us</p>
                                <div className='mt-[16px] flex gap-[15.39px]'>
                                    <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full'>
                                        <a href="#" target='blank'>
                                            <LINKDIN />
                                        </a>
                                    </div>
                                    <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full'>
                                        <a href="#" target='blank'>
                                            <INSTAGRAM />
                                        </a>
                                    </div>
                                    <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full'>
                                        <a href="#" target='blank'>
                                            <FACEBOOK />
                                        </a>
                                    </div>
                                    <div className='w-[33.5px] h-[33.5px] justify-center items-center flex border-[2px] border-white rounded-full'>
                                        <a href="#" target='blank'>
                                            <TWITER />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
