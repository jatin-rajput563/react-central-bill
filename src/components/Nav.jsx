import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isNavOpen]);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="py-[20px] px-[20px] w-full bg-black">
            <div className="container max-w-[1140px] mx-auto">
                <div className="flex items-center justify-between w-full">
                    <a className="text-white font-semibold text-lg no-underline z-10" href="">
                        logo
                    </a>

                    <ul className={`fixed lg:static flex justify-center items-center flex-col lg:flex-row w-full lg:w-auto bg-[#00243C] lg:bg-transparent top-0 bottom-0 right-0 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} transition-transform duration-300 z-20 p-8 lg:p-0 gap-6 lg:gap-6`}>
                        <li>
                            <a href="#">
                                <img className="hidden" src="" alt="nav-logo" />
                            </a>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-6 items-center">
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">About</a>
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">How It Works</a>
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">Services</a>
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">Testimonials</a>
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">Why Us</a>
                            <a className="no-underline hover:underline text-white font-semibold text-lg" href="/">FAQ</a>
                        </li>
                        <li className="mt-4 lg:mt-0 min-lg:hidden">
                            <button className="bg-white text-[#00171F] px-4 py-2 rounded-lg flex items-center">
                                Get Started
                                <span className="ml-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="#00171F" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </li>
                    </ul>
                    <ul className='max-lg:hidden block'>
                        <li className="mt-4 lg:mt-0">
                            <button className="bg-white text-[#00171F] px-4 py-2 rounded-lg flex items-center">
                                Get Started
                                <span className="ml-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="#00171F" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </li>
                    </ul>

                    <div onClick={toggleNavbar} className="lg:hidden z-30 cursor-pointer flex flex-col gap-1">
                        <span className={`w-8 h-1 rounded bg-white transition-transform duration-300 origin-left ${isNavOpen ? 'rotate-[32deg]' : ''}`}></span>
                        <span className={`w-8 h-1 rounded bg-white transition-all duration-300 ${isNavOpen ? 'bg-transparent' : ''}`}></span>
                        <span className={`w-8 h-1 rounded bg-white transition-transform duration-300 origin-left ${isNavOpen ? '-rotate-[32deg]' : ''}`}></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
