import styled from 'styled-components'

export const SectionDividerContainer = styled.div`
    background: #FFD700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 180px;
    position: relative;
    z-index:1;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 768px) {
        height: 180px;
    }

    @media screen and (max-width: 425px) {
        height: 100px;
    }
`
export const DividerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
`

export const DividerImgContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: transparent;
`
export const ChestImg = styled.img`
    height: 100%;
    filter: drop-shadow(0 0 5px black);

    @media screen and (max-width: 768px) {
        width: 33%;
        height: auto;

    }
`
