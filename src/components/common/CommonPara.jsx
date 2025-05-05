import React from 'react'

const CommonPara = ({ text, textClass }) => {
    return (
        <div>
            <p className={`font-normal leading-[130%] text-[16px] m-0 family text-white  ${textClass}`}>{text}</p>
        </div>
    )
}

export default CommonPara
