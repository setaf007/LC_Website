import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'linear-gradient(#001480, #0020cc)' : 'linear-gradient(#001480, #0020cc)')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #FFD700;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 0;

    
`;

export const LoadedcratesLogo = styled.img`
    width: 200px;

    @media screen and (max-width: 960px) {
        width: 150px;
        margin-top: 10px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: drop-shadow(0 0 10px #FFD700);
    }
`


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #d4af37;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 830px) {
        font-size: 15px;
    }

    &.active {
        border-bottom: 5px solid #FFD700;
        font-weight: bold;
        filter: drop-shadow(0 0 10px #FFD700);
        color: #FFD700;
    }

    &:hover {
        filter: drop-shadow(0 0 10px #FFD700);
        transition: 0.2s ease-in;
        color: #FFD700;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
//later change to styled(LinkR) when linking to mint page
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

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
`

export const SocialIconLinks = styled.a`
    color: #d4af37;
    filter: drop-shadow(0 0 5px black);
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        filter: drop-shadow(0 0 10px #FFD700);
        transition: 0.2s ease-in;
        color: #FFD700;
    }
`

export const MintLink = styled.a`
    text-decoration: none;
    color: black;
`


