import React from 'react'

const CommonHeadText = ({ HeadClass, HeadText, SpanText, FrontSpan }) => {
    return (
        <>
            <p className={`font-normal family text-[48px] leading-[110%] text-white m-0 ${HeadClass}`}> <span className='font-bold'>{FrontSpan}</span> {HeadText} <span className='font-bold'>{SpanText}</span> </p>
        </>
    )
}

export default CommonHeadText
