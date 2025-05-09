import React from 'react'
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'
import CommonSecHead from './common/CommonSecHead'
 

const ChoosseUs = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="max-w-[1140px] mx-auto px-3">
                    <CommonHeadText HeadText="Why Choose Us for " SpanText="Utilities" HeadClass="!text-black text-center" />
                    <CommonPara text="This emphasizes both the action and the benefits, drawing in potential customers with a
                     clear value proposition. Let me know if you'd like any adjustments!" textClass="max-w-[620px] text-center mx-auto pt-[16px] leading-[150%] !text-[#00171F]" />
                    <div className="flex flex-wrap gap-[24px] justify-center mt-[58px]">
                        <div className='bg-[#003459] p-[40px] max-w-[400px] w-full rounded-[4px]'>
                            <img src='./src/images/svg/star.svg' alt="img" />
                            <CommonSecHead SecText="Tailored Recommendations" SecClass="!text-white pt-[30px]" />
                            <CommonPara text="Our platform analyzes your unique energy needs and preferences
                             to suggest the best utility providers, ensuring you get the most personalized options available." textClass="max-w-[344px] !leading-[150%] pt-[12px] opacity-75" />
                            <button className='px-[26px] py-[22px] bg-white rounded-[446px] mt-[22px] hover:bg-[#003459] border-2 border-[#003459] hover:border-[black] transition-all leaner'>
                                <img src="./src/images/svg/buttonArrow.svg" alt="button-arrow" />
                            </button>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='max-w-[334px] rounded-[4px] shadow-2xl border border-white hover:scale-[1.05] transition-all p-[24px] min-h-[286px]'>
                                <img src='./src/images/svg/comparison.svg' alt="" />
                                <CommonSecHead SecText="Simplified Comparison Process" SecClass="pt-[18px] group-hover:text-[white]" />
                                <CommonPara text="Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." textClass="max-w-[286px] !leading-[150%] pt-[12px] !text-[#00171F] group-hover:text-[white]" />
                            </div>
                            <div className='max-w-[334px] rounded-[4px] shadow-2xl border border-white hover:scale-[1.05] transition-all p-[24px] min-h-[286px]'>
                                <img src='./src/images/svg/service.svg' alt="" />
                                <CommonSecHead SecText="No Service Interruptions" SecClass="pt-[18px]" />
                                <CommonPara text="We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." textClass="max-w-[286px] !leading-[150%] pt-[12px] !text-[#00171F]" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='max-w-[334px] rounded-[4px] shadow-2xl border border-white hover:scale-[1.05] transition-all p-[24px] min-h-[286px]'>
                                <img src='./src/images/svg/time.svg' alt="time-img" />
                                <CommonSecHead SecText="Save Time and Money" SecClass="pt-[18px]" />
                                <CommonPara text="With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." textClass="max-w-[286px] !leading-[150%] pt-[12px] !text-[#00171F]" />
                            </div>
                            <div className='max-w-[334px] rounded-[4px] shadow-2xl border border-white hover:scale-[1.05] transition-all p-[24px] min-h-[286px]'>
                                <img src='./src/images/svg/support.svg' alt="time-img" />
                                <CommonSecHead SecText="Comprehensive Support" SecClass="pt-[18px]" />
                                <CommonPara text="Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." textClass="max-w-[286px] !leading-[150%] pt-[12px] !text-[#00171F]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChoosseUs
