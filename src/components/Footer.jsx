import React from 'react'
import logo from '../images/svg/footer-logo.svg'
import CommonPara from './common/CommonPara'

const Footer = () => {
    return (
        <div className="min-h-screen bg-[url(../src/images/png/footer-bg.png)] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[1140px] mx-auto px-3">
                <div>
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" />
                            <CommonPara text="Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. " textClass="leading-[150%] max-w-[297px] opacity-75 pt-[28px]" />
                            <div>
                                
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
