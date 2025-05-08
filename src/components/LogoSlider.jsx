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
            <div className="pt-[64px]">
                <div className='max-w-[1140px] mx-auto px-3'>
                    <Swiper
                        spaceBetween={0}
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
                            <img src={energy} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={blueNRG} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={dodo} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={origin} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ovo} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sumo} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={agl} alt="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={origin} alt="slider-img" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default LogoSlider
