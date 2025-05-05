import React from 'react'

const CommonDiscription = ({ text, textClass }) => {
    return (
        <div>
            <p className={`font-normal leading-[130%] text-[16px] ${textClass}`}>{text}</p>
        </div>
    )
}

export default CommonDiscription
