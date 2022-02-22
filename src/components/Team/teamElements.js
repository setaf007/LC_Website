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
    display: flex;
    margin-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display: grid;
        grid-auto-columns: minmax(auto, 1fr);
        grid-template-areas: 'col1 col2' 'col3 col4';
    };

    @media screen and (max-width: 450px) {
        display: grid;
        grid-auto-columns: minmax(auto, 1fr);
        grid-template-areas: 'col1 col1' 'col2 col2' 'col3 col3' 'col4 col4';
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
`
export const Column2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Column3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col3;
`

export const Column4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 0 15px;
    grid-area: col4;
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
        color: #d3506f;
        font-style: italic;
        text-decoration: underline;
    }
`

export const TeamWrapper = styled.div`
    width: 100%;
    height: 380px;
    display: block;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    background-image: url(${Scroll});
    filter: drop-shadow(0 0 10px black);
    border: 2px solid #FFD700;
    border-radius: 15px;

    &:hover {
        filter: drop-shadow(0 0 10px #FFD700);
        transition: 0.2s ease-in;
    }

    @media screen and (max-width: 768px) {
        width: 275px;
        height: 420px;
    };
`

export const TeamImgWrapper = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    @media screen and (max-width: 1024px) {
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    };

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    };
`

export const TeamTextWrapper = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0;
`

export const TeamImg = styled.img`
    width: 90%;
    height: 200px;
    margin-top: 10px;
    border: 2px solid #FFD700;
    border-radius: 2px;

    @media screen and (max-width: 768px) {
        width: 100%;
    };
`

export const TeamText = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: black;
    padding-bottom: 5px;
`


export const SocialIconLinks = styled.a`
    color: #4f9cf0;
    font-size: 40px;
    filter: drop-shadow(0 0 5px black);

    &:hover {
        filter: drop-shadow(0 0 5px #4fc4f0);
        transition: 0.2s ease-in;
        color: 4fc4f0;
    }
`