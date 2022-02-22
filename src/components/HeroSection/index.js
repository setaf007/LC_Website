import React, {useState} from 'react'
import Image from '../../images/beach.png'
import Logo from '../../images/loadedcrates.png'
import CrateGif from '../../images/chest_gold.png'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { 
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLinks,
    Gif,
    GifContainer,
    MintLink,
    NavBtnLink
} from './HeroElements'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImgBg src={Image} />
            </HeroBg>
            <HeroContent>
                <GifContainer>
                    <Gif src={CrateGif}/>
                </GifContainer>
                <HeroH1 src={Logo} />
                <HeroP>Loot crates FOR Degens</HeroP>
                <HeroP>BY Degens</HeroP>
                <HeroBtnWrapper>
                    <NavBtnLink onMouseEnter = {onHover} onMouseLeave = {onHover} primary="true" 
                    dark="true">
                        <MintLink>Mint closed!</MintLink>
                    </NavBtnLink>
                </HeroBtnWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
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
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
