import React from 'react'
import Nav from './Nav'
import CommonPara from './common/CommonPara'
import CommonButton from './common/CommonButton'
import mainImg from '../images/png/header-main.png'
import dotsImg from '../images/png/dots-img.png'

const Header = () => {
    return (
        <>
            <div className="min-h-screen bg-[url(./images/png/header-bg.png)] bg-no-repeat bg-[length:100%_100%] bg-center">
                <Nav />
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="flex flex-row flex-wrap -mx-3 pt-[109px] max-md:pt-[50px]">
                        <div className="w-12/12 min-lg:w-6/12 relative">
                            <div>
                                <h1 className='font-normal text-[64px] max-md:text-[42px] leading-[110%] max-w-[612px] family text-white max-lg:text-center max-lg:mx-auto max-lg:max-w-[none]'>Easily Compare <span className='font-bold'> Energy, Gas, and Internet </span> Plans</h1>
                                <CommonPara text="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place." textClass="max-w-[506px] !leading-[150%] pt-[16px] max-lg:text-center max-lg:mx-auto" />
                                <div className='relative max-w-[476px] flex max-lg:mx-auto'>
                                    <input type="text" className='bg-white w-full max-w-[476px] h-[66px] rounded-[100px] rounded-tl-[0] !rounded-bl-[70px] pl-[22px] font-normal text-[16px] leading-[110%] mt-10 family' placeholder='Start typing your address' />
                                    <CommonButton btnText="Compare" btnClass=" !bg-[#00A8E8] absolute  top-[47%] right-[2%]" />
                                </div>
                            </div>
                            <p className='absolute -bottom-80 left-0 font-normal text-[38px] max-w-[548px] leading-[110%]'>More than <span className='text-[#00A8E8]'>80,000+ </span> companies trust bill central </p>
                        </div>
                        <div className="w-12/12 min-lg:w-6/12 relative ">
                            <div className='mx-auto flex justify-center mt-[10px]'>
                                <img className='max-w-[588px] w-full rounded-[4px] z-10 lg:absolute right-0' src={mainImg} alt="main-img" />
                                <img className='absolute top-[-7%] right-[-11%] max-lg:hidden w-full max-w-[170px]' src={dotsImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
