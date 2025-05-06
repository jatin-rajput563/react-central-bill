import React from 'react'
import mainImg from '../images/png/energy-mian-img.png'
import CommonHeadText from './common/CommonHeadText'

const Energy = () => {
    return (
        <>
            <div className="min-h-screen pt-[180px]">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-row flex-wrap -mx-3 ">
                        <div className="w-6/12">
                            <img src={mainImg} alt="main-img" />
                        </div>
                        <div className="w-6/12">
                            <CommonHeadText HeadText="Made Simple" FrontSpan="Switching Energy" HeadClass=" !text-black max-w-[409px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Energy
