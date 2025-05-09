import CamronImg from '../images/svg/camron.svg'
import RonaldImg from '../images/svg/ronald.svg'
import JayShahImg from '../images/svg/jay.svg'
import starSvg from '../images/svg/greenBoxStar.svg';
import img1 from "../images/png/slider-img-1.png";
import img2 from "../images/png/slider-img-2.png";
import img3 from "../images/png/slider-img-3.png";
import img4 from "../images/png/slider-img-4.png";
import electricitySvg from '../images/svg/electricity.svg';
import gasSvg from '../images/svg/gas.svg';
import internetSvg from '../images/svg/interplan.svg';
import bundleSvg from '../images/svg/bundle.svg';

export const SLIDER_DATA = [
    {
        img: CamronImg,
        name: "Cameron",
        description: "@cameron",
        svg: starSvg,
        para: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: RonaldImg,
        name: "Ronald",
        description: "@ronald",
        svg: starSvg,
        para: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: JayShahImg,
        name: "Jay Shah",
        description: "@jayshah",
        svg: starSvg,
        para: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: RonaldImg,
        name: "Ronald",
        description: "@ronald",
        svg: starSvg,
        para: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
];

export const QUESTIONS_DATA = [
    {
        para: "Can I switch providers if I’m currently in a contract?",
        text: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you."
    },
    {
        para: "Will my service be interrupted if I switch providers?",
        text: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you."
    },
    {
        para: "How long does it take to switch providers?",
        text: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you."
    },
    {
        para: "Is there a fee for switching providers?",
        text: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you."
    },
];

export const IMG_DATA = [
    {
        img: img1,
        para: '1. Enter Your Location and Preferences',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.',
    },
    {
        img: img2,
        para: '2. Compare Providers',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.',
    },
    {
        img: img3,
        para: '3. Switch Easily',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.',
    },
    {
        img: img4,
        para: '4. Choose the Best Plan',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.',
    }
];

export const planComparisons = [
    {
        id: 1,
        title: 'Electricity Plan Comparisons',
        description: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
        img: electricitySvg,
        marginClass: 'ml-[106px] max-xl:ml-[53px] max-sm:ml-0 max-lg:ml-[253px]',
    },
    {
        id: 2,
        title: 'Gas Plan Comparisons',
        description: 'Compare gas plans to find the best rates and providers for your needs.',
        img: gasSvg,
        marginClass: 'ml-[163px] max-xl:ml-[113px] max-sm:ml-[11px] max-lg:ml-[313px]',
    },
    {
        id: 3,
        title: 'Internet Plan Comparisons',
        description: 'Find the best internet plans with fast speeds and great customer support.',
        img: internetSvg,
        marginClass: 'ml-[127px] max-xl:ml-[78px] max-sm:ml-0 max-lg:ml-[277px]',
    },
    {
        id: 4,
        title: 'Bundle Packages',
        description: 'Get the best value by bundling utilities and services together.',
        img: bundleSvg,
        marginClass: 'ml-[220px] max-xl:ml-[175px] max-sm:ml-[61px] max-lg:ml-[375px]',
    },
];