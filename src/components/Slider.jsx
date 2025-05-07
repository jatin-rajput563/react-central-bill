import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import CommonHeadText from './common/CommonHeadText';
import CommonPara from './common/CommonPara';
import { SLIDER_DATA } from '../utils/helper';

const Slider = () => {
    return (
        <>
            <div className="min-h-screen py-[160px]">
                <div className="max-w-[1140px] mx-auto px-3">
                    <CommonHeadText HeadText="Our " SpanText="Testimonials" HeadClass="!text-black text-center" />
                    <CommonPara text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                     consectetur mi. Vulputate sapien a a bibendum" textClass="!text-[#00171F] max-w-[490px] text-center mx-auto pt-[16px] leading-[150%] mb-[62px]" />
                    <div>
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {SLIDER_DATA.map((item, index) => (
                                <SwiperSlide>
                                    <div id={index} className="">
                                        <div className='max-w-[364px] w-full p-[20px] border-[#E5E5E5] border shadow-sm'>
                                            <div className='flex gap-[8px]'>
                                                <img src={item.img} alt="camron" />
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                            <img src={item.svg} alt="star" />
                                            <p>{item.para}</p>
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
