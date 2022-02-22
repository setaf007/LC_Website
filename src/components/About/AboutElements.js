import styled, {keyframes} from 'styled-components'
import Image from '../../images/sandbg.jpg'
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
    display: grid;
    z-index: 1;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    };
`


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
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
    max-width: 490px;
    background-image: url(${Scroll});
    background-size: cover;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    transition: 0.3s;
    border-radius: 5px;
    text-align: center;
    animation: ${glow} 1.5s linear infinite;
    margin-top: 40px;

    &.luck {
        background-image: none;
    }

`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #b53333;
    cursor: default;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    cursor: default;

    &.underline {
        color: #b53333;
        font-style: italic;
        text-decoration: underline;
    }

    &.lucky {
        color: #b53333;
        font-size: 26px;
        font-weight: 600;
    }
`


const shake = keyframes`
    0% {
    -webkit-transform: translate(0);
        transform: translate(0);
    }
    20% {
        -webkit-transform: translate(-2px, 2px);
                transform: translate(-2px, 2px);
    }
    40% {
        -webkit-transform: translate(-2px, -2px);
                transform: translate(-2px, -2px);
    }
    60% {
        -webkit-transform: translate(2px, 2px);
                transform: translate(2px, 2px);
    }
    80% {
        -webkit-transform: translate(2px, -2px);
                transform: translate(2px, -2px);
    }
    100% {
        -webkit-transform: translate(0);
                transform: translate(0);
    }
`


export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    &:hover {
        animation: ${shake} 0.3s linear 3 both;
        filter: drop-shadow(0 0 10px #FFD700);
    }
`
export const AboutPosterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    
    &.degenwrapper {
        margin-top: 50px;
    }
`

export const AboutPoster = styled.img`
    width: 45%;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 768px) {
        width: 95%;
    };
`