import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        filter: drop-shadow(0 0 5px white);
        transition: 0.2s ease-in;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`

export const SocialIconLinks = styled.a`
    color: white;
    font-size: 24px;

    &:hover {
        filter: drop-shadow(0 0 5px white);
        transition: 0.2s ease-in;
    }
`
