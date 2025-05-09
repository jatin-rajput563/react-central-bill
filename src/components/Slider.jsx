import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import CommonHeadText from './common/CommonHeadText';
import CommonPara from './common/CommonPara';
import leftArrow from '../images/svg/slider-left-arrow.svg'
import rightArrow from '../images/svg/slider-right-arrow.svg'
import { SLIDER_DATA } from '../utils/helper';

const Slider = () => {
    return (
        <>
            <div className=" py-[160px] max-lg:py-[50px] relative">
                {/* <img className='absolute left-[13%] top-[55%] py-[8.5px] px-[13.5px] border rounded-full hover:bg-black transition-all' src={leftArrow} alt="left-arrow" />
                <img className='absolute right-[13%] top-[55%] py-[8.5px] px-[13.5px] border rounded-full hover:bg-black transition-all' src={rightArrow} alt="left-arrow" /> */}
                <div className="max-w-[1140px] mx-auto px-3">
                    <CommonHeadText HeadText="Our " SpanText="Testimonials" HeadClass="!text-black text-center max-lg:!text-[40px]" />
                    <CommonPara text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                     consectetur mi. Vulputate sapien a a bibendum" textClass="!text-[#00171F] max-lg:!text-[14px] max-w-[490px] text-center mx-auto pt-[16px] leading-[150%] mb-[62px] max-lg:pb-[40px]" />
                    <div>
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={3}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                668: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {SLIDER_DATA.map((item, index) => (
                                <SwiperSlide>
                                    <div id={index} className="">
                                        <div className='max-w-[364px] w-full p-[20px] border-[#E5E5E5] border shadow-xl'>
                                            <div className='flex gap-[8px]'>
                                                <img src={item.img} alt="camron" />
                                                <div>
                                                    <p className='font-normal text-[24px] leading-[150%] family'>{item.name}</p>
                                                    <p className='font-normal text-[16px] leading-[150%] family opacity-50'>{item.description}</p>
                                                </div>
                                            </div>
                                            <img className='pt-[24px]' src={item.svg} alt="star" />
                                            <p className='pt-[18px] font-normal text-[16px] leading-[150%] family'>{item.para}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider
