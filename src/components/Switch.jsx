import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IMG_DATA } from '../utils/helper';
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'

const Switch = () => {
    return (
        <>
            <div className="max-w-[1440px] mx-auto pb-[162px]">
                <CommonHeadText HeadText="Simple Steps To" SpanText="Switch" HeadClass="!text-black text-center " />
                <CommonPara text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" textClass="!text-[#4B4B4B] max-w-[610px] text-center mx-auto pt-[16px] pb-[58px]" />
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}>
                    {IMG_DATA.map((item, index) => (
                        <SwiperSlide key={index} className='max-w-[360px] w-full mx-auto relative overflow-hidden group'>
                            <p className='absolute left-1/2 -translate-x-1/2 rotate-[270.3deg] whitespace-nowrap bottom-[250px] xl:bottom-[300px] z-1 font-normal text-[30px] leading-[110%] m-0 family group-hover:top-[-200px] duration-500 ease-linear'>{item.para}</p>
                            <div className="w-full bg-[#EAF9FFF0] absolute opacity-[94%] h-full group-hover:opacity-0 duration-500 ease-linear"></div>
                            <img className='w-full ' src={item.img} alt={item.para} />
                            <div className='max-w-[360px] w-full min-h-[246px] p-8 bg-[#003459] absolute bottom-[-130%] group-hover:bottom-0 duration-500 ease-linear'>
                                <p className='font-normal text-[30px] max-lg:text-[20px] leading-[110%] text-white m-0 family'>{item.para}</p>
                                <p className='font-normal text-[16px] max-lg:text-[14px] leading-[160%] text-white m-0 pt-[14px] max-w-[286px] family'>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper >
            </div >
        </>
    )
}

export default Switch
