import React from 'react'
import { BlackArrow, WhiteArrow } from '../../utils/icon'

const CommonButton = ({ btnText, btnClass,customClass1,customClass2 }) => {
    return (
        <div>
            <button className={`font-family-primary gap-[3px] font-semibold leading-[150%] text-white border-0 bg-[#2C49FE] py-[11px] px-[28px] flex rounded-3xl rounded-tl-[0] cursor-pointer transition-all duration-200 ease-linear ${btnClass}`}>{btnText} <span className={`${customClass2} hidden`}><BlackArrow/></span>  <span className={`${customClass1} hidden`}> <WhiteArrow/> </span></button>
        </div>
    )
}

export default CommonButton
