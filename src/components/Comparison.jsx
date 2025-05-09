import React, { useState, useRef, useEffect } from 'react';
import { planComparisons } from '../utils/helper';
import CloseArrow from '../images/svg/close.svg';
import OpenArrow from '../images/svg/open.svg';
import CommonHeadText from './common/CommonHeadText';

const Comparison = () => {
    const [openSection, setOpenSection] = useState(1);
    const contentRefs = useRef({});

    const toggleMenu = (menu) => {
        setOpenSection((prev) => (prev === menu ? null : menu));
    };

    useEffect(() => {
        Object.keys(contentRefs.current).forEach((id) => {
            const el = contentRefs.current[id];
            if (el) {
                if (parseInt(id) === openSection) {
                    el.style.maxHeight = el.scrollHeight + 'px';
                    el.style.opacity = 1;
                } else {
                    el.style.maxHeight = '0px';
                    el.style.opacity = 0;
                }
            }
        });
    }, [openSection]);

    return (
        <div id='services' className='py-[162px] max-xl:py-[80px] max-lg:py-16'>
            <div className="container max-w-[1140px] mx-auto px-3">
                <div className="lg:flex justify-between items-start ">
                    <div className='lg:w-6/12 w-full'>
                        <CommonHeadText HeadText="Comprehensive Utility" SpanText="Comparisons" HeadClass="!text-black max-lg:text-center pb-[46px] max-lg:!text-[35px]" />
                        <div className="space-y-6">
                            {planComparisons.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="bg-white hover:shadow-lg rounded-md p-[14px] border border-[#0000001A] transition-all duration-700 ease-in-out"
                                >
                                    <button
                                        onClick={() => toggleMenu(plan.id)}
                                        className="w-full text-left font-medium cursor-pointer text-2xl flex items-center justify-between max-md:text-lg lg:whitespace-nowrap"
                                    >
                                        <div className="flex items-center">
                                            <img className='w-[64px] mr-6 pointer-events-none' src={plan.img} alt={plan.title} />
                                            {plan.title}
                                        </div>
                                        <span className={`text-xl ${plan.marginClass}`}>
                                            {openSection === plan.id ? (
                                                <img
                                                    src={OpenArrow}
                                                    alt="Collapse"
                                                    className="h-5 w-5 transition-transform duration-100 rotate-180"
                                                />
                                            ) : (
                                                <img
                                                    src={CloseArrow}
                                                    alt="Expand"
                                                    className="h-5 w-5 transition-transform duration-100 rotate-0"
                                                />
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        ref={(el) => (contentRefs.current[plan.id] = el)}
                                        style={{
                                            maxHeight: openSection === plan.id ? '0px' : '0px',
                                            overflow: 'hidden',
                                            opacity: 0,
                                            transition: 'max-height 0.7s ease, opacity 0.7s ease',
                                        }}
                                    >
                                        <p className="-mt-1 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px] py-2">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-6/12 flex justify-end pt-12 max-lg:justify-center max-lg:pt-10'>
                        <img src='./src/images/png/comparison-main-img.png' alt="designer" className="max-w-[530px] max-lg:mx-auto max-xl:max-w-[465px] max-lg:w-full pointer-events-none transition-transform duration-700 hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;
