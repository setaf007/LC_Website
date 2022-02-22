import styled, {keyframes} from 'styled-components'
import Image from '../../images/bg2.jpg'
import Scroll from '../../images/scroll.jpg'

export const InfoContainer = styled.div`
    color: #fff;
    background-image: url(${Image});
    background-size: cover;



    @media screen and (max-width: 768px) {
        padding: 100px 0;
    };
`

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ColumnWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2 col2' 'col1 col1';
    };
`

export const Column1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col1;
    overflow: hidden;
`
export const Column2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col2;
    overflow: hidden;
`
const glow = keyframes`
    0% {
        filter: drop-shadow(0 0 10px #FFD700);
    }

    50% {
        filter: none;
    }

    100% {
        filter: drop-shadow(0 0 10px #FFD700);
    }
`

export const TextWrapper = styled.div`
    width: 500px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 80px;
    background-image: url(${Scroll});
    background-size: cover;
    transition: 0.3s;
    border-radius: 5px;
    cursor: default;
    animation: ${glow} 1.5s linear infinite;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        width: 90%;
    };
`
export const TopLine = styled.p`
    color: black;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #b53333;
    text-align: center;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`
export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: black;

    &.underline {
        color: black;
        font-style: italic;
        text-decoration: underline;
    }
`

export const HowItWorksPosterWrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    @media screen and (max-width: 768px) {
        width: 60%;
    };
`

export const HowItWorksPoster = styled.img`
    width: 100%;
    filter: drop-shadow(0 0 5px black);

`