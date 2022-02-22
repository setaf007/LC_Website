import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLinks } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            loadedcrates
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLinks href="//www.discord.gg/bQxnh8hFGY" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLinks>
                            <SocialIconLinks href="//www.twitter.com/LoadedCrates" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLinks>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
        </FooterContainer>
    )
}

export default Footer
