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
    padding-bottom: 50px;
    justify-content: center;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
    width: 800px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 80px;
    background-image: url(${Scroll});
    transition: 0.3s;
    border-radius: 5px;
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
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`

export const FAQWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: black;
    cursor: pointer;
    background: #b59363;

    &:hover {
        background: #FFD700;
        transition: 0.2s ease-in;
    }


    h1 {
        padding: 0.5rem;
        font-size: 15px;
        
    }

    span {
        margin-right: 0.5rem;
    }
`

export const FAQContainer = styled.div`
    width: 100%;
`

export const Dropdown = styled.div`
    background: #ffe7ad;
    transtion: all 0.2s ease-in-out;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid #FFD700;
    border-bottom: 2px solid #FFD700;
    cursor: default;

    p {
        font-size: 15px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: left;
    }
`
