import React from 'react'

const CommonHeading = ({ heading, HeadingClass }) => {
    return (
        <>
            <h2 className={`font-family-primary font-normal text-[48px] leading-[110%] text-black  ${HeadingClass}`}>{heading}</h2>
        </>
    )
}

export default CommonHeading
