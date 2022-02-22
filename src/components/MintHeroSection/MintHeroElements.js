import styled, {keyframes} from 'styled-components'

export const MintHeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 800px;
    position: relative;
    z-index:1;
`

export const MintHeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const MintImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const MintHeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MintHeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

const glowAnimate = keyframes`
    0% {
        filter: drop-shadow(0 0 5px gold);
    }
    100% {
        filter: drop-shadow(0 0 20px gold);
    }
`

const wobble = keyframes`
    0%,
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
              transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(6deg);
              transform: translateX(15px) rotate(6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
              transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
              transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
              transform: translateX(-6px) rotate(-1.2deg);
    }
`


export const ChestWrapper = styled.div`
    max-width: 300px;
    height: 100%;
    animation: ${glowAnimate} 1s ease-in-out infinite alternate;
`



export const ChestImg = styled.img`
    width: 100%;
    margin: 0;
    padding-right: 0;
    animation: ${wobble} 1s infinite ;
`