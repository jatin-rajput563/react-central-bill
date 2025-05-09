import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import energy from '../images/svg/slider-energy.svg'
import blueNRG from '../images/svg/slider-blueNRG.svg'
import dodo from '../images/svg/slider-dodo.svg'
import origin from '../images/svg/slider-origin.svg'
import ovo from '../images/svg/slider-ovo.svg'
import sumo from '../images/svg/slider-sumo.svg'
import agl from '../images/svg/slider-agl.svg'

import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const LogoSlider = () => {
    return (
        <>
            <div className="pt-[250px] max-lg:pt-[50px]">
                <div className='max-w-[1140px] mx-auto px-3'>
                    <Swiper
                        spaceBetween={51}
                        slidesPerView={7}
                        centeredSlides={true}
                        loop={true}

                        autoplay={{
                            delay: 100,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            520: {
                                slidesPerView: 3,
                            },
                            668: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='justify-center flex items-center max-w-[126.67px] h-[62px]'>
                                <img src={energy} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={blueNRG} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={dodo} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={origin} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={ovo} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={sumo} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center w-full max-w-[126.67px] h-[62px]'>
                                <img src={agl} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='justify-center flex items-center h-[62px]'>
                                <img src={origin} alt="slider-img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default LogoSlider
