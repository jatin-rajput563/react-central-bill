import React,{useState} from 'react'
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'
import { QUESTIONS_DATA } from '../utils/helper';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-[1140px] mx-auto px-3">
                <div>
                    <CommonHeadText HeadText="Frequently Asked" HeadClass="!text-black text-center" SpanText="Questions" />
                    <CommonPara text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" textClass="!text-[#00171F] pt-[16px] max-w-[556px] text-center mx-auto " />
                </div>
                <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
                    <div className="w-[916px] max-lg:px-3">
                        {QUESTIONS_DATA.map((item, index) => (
                            <div key={index} className={`mb-7 p-5 sm:p-6 w-full shadow-[0px_4px_23.2px_0px_#00000014] rounded-md ${openIndex === index ? 'bg-[#003459] text-white' : 'bg-[#FEFEFE] text-[#00171F]'
                                }`} >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="font-family-primary font-normal text-lg sm:text-2xl leading-[110%] w-full cursor-pointer flex justify-between items-center text-start"
                                >
                                    <span>{item.para}</span>
                                    <span className="ml-3 w-7 h-7 sm:border-[2px] rounded-full flex justify-center items-center">{openIndex === index ? "-" : "+"}</span>
                                </button>

                                {openIndex === index && (
                                    <div className="font-family-primary font-normal text-base leading-[150%] mt-3.5 max-w-[722px] transition-all duration-200">
                                        {item.text}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Questions
