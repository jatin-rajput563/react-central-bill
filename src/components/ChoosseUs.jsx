import React from 'react'
import CommonHeadText from './common/CommonHeadText'
import CommonPara from './common/CommonPara'
import Starimg from '../images/svg/star.svg'

const ChoosseUs = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="max-w-[1140px] mx-auto px-3">
                    <CommonHeadText HeadText="Why Choose Us for " SpanText="Utilities" HeadClass="!text-black text-center" />
                    <CommonPara text="This emphasizes both the action and the benefits, drawing in potential customers with a
                     clear value proposition. Let me know if you'd like any adjustments!" textClass="max-w-[620px] text-center mx-auto pt-[16px] leading-[150%] !text-[#00171F]" />
                    <div className="flex gap-[24px] flex-wrap">
                        <div className='bg-[#003459]'>
                            <img src={Starimg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChoosseUs
