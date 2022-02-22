import styled, {keyframes} from 'styled-components'

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 900px;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    background: #232a34;
    filter: brightness(70%);

    @media screen and (max-width: 768px) {
        -o-object-fit: cover;
        object-fit: cover;
    }

    
`

const wobble = keyframes`
    0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
`

export const GifContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`

export const Gif = styled.img`
    width: 50%;
    -webkit-animation: ${wobble} 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
	        animation: ${wobble} 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.img`
    margin-top: 0;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
    
`

export const HeroP = styled.p`
    margin-top: 0;
    color: #FFD700;
    font-size: 30px;
    text-align: center;
    max-width: 600px;
    cursor: default;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
//to add link later, put to='/mint' into Button element
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const SocialMedia = styled.section`
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLinks = styled.a`
    color: #d4af37;
    filter: drop-shadow(0 0 5px black);
    font-size: 50px;

    &:hover {
        filter: drop-shadow(0 0 10px #FFD700);
        transition: 0.2s ease-in;
        color: #FFD700;
    }
`

export const NavBtnLink = styled.button`
    background: #d4af37;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    border-radius: 20px;
    



    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFD700;
        filter: drop-shadow(0 0 10px #FFD700);
    }

`


export const MintLink = styled.a`
    color: black;
    text-decoration: none;
`
