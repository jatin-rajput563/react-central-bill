import React, { useState, useRef, useEffect } from 'react'
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'
import { QUESTIONS_DATA } from '../utils/helper';
import minus from '../images/svg/accordion-minus.svg'
import plus from '../images/svg/accordion-plus.svg'

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    useEffect(() => {
    }, [openIndex]);

    return (
        <div className="pb-[52px]">
            <div className="max-w-[1140px] mx-auto px-3">
                <div>
                    <CommonHeadText HeadText="Frequently Asked" HeadClass="!text-black text-center max-lg:!text-[43px]" SpanText="Questions" />
                    <CommonPara text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" textClass="!text-[#00171F] pt-[16px] max-lg:!text-[14px] max-w-[556px] text-center mx-auto " />
                </div>
                <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5 mt-[52px]">
                    <div className="w-[916px] max-lg:px-3">
                        {QUESTIONS_DATA.map((item, index) => (
                            <div
                                key={index}
                                className={`mb-7 p-5 sm:p-6 w-full shadow-[0px_4px_23.2px_0px_#00000014] rounded-md ${openIndex === index ? 'bg-[#003459] text-white' : 'bg-[#FEFEFE] text-[#00171F]'}`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="family font-normal text-[24px] max-lg:!text-[14px] leading-[110%] w-full cursor-pointer flex justify-between items-center text-start"
                                >
                                    <span>{item.para}</span>
                                    <span className="ml-3 w-7 h-7 border-[2px] rounded-full flex justify-center items-center">
                                        {openIndex === index ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                                    </span>
                                </button>

                                <div
                                    ref={el => (contentRefs.current[index] = el)}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{
                                        maxHeight: openIndex === index
                                            ? contentRefs.current[index]?.scrollHeight + 'px'
                                            : '0px'
                                    }}
                                >
                                    <div className="family font-normal text-[16px] max-lg:!text-[12px] leading-[150%] mt-3.5 max-w-[722px]">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
