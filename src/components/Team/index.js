import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { FaTwitter } from 'react-icons/fa'
import Image1 from '../../images/pfpzia.JPG'
import Image2 from '../../images/pfphan.JPG'
import Image3 from '../../images/pfpkin.JPG'
import Image4 from '../../images/pfpyaz.JPG'
import { 
    InfoContainer,
    InfoWrapper,
    ColumnWrapper,
    Column1,
    Column2,
    Column3,
    Column4,
    TextWrapper,
    Heading,
    Subtitle,
    TeamWrapper,
    TeamImgWrapper,
    TeamTextWrapper,
    TeamImg,
    TeamText,
    SocialIconLinks} from './teamElements'

const Team = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
            <InfoContainer id="team">
                <InfoWrapper>
                        <TextWrapper data-aos="fade-up">
                            <Heading>Team</Heading>
                            <Subtitle>Loaded crates is brought to you by 4 degenerate pirates</Subtitle>
                            <Subtitle>WE ARE DOXXED</Subtitle>
                            <Subtitle>Find out more about us on our Discord</Subtitle>
                        </TextWrapper>
                </InfoWrapper>
                <ColumnWrapper>
                    <Column1>
                        <TeamWrapper data-aos="fade-up">
                            <TeamImgWrapper>
                                <TeamImg src={Image1}/>
                            </TeamImgWrapper>
                            <TeamTextWrapper>
                                <TeamText>Zia Tafazzal</TeamText>
                                <TeamText>Head Marketing</TeamText>
                                <SocialIconLinks href="//www.twitter.com/CryptoZia" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLinks>
                            </TeamTextWrapper>
                        </TeamWrapper>
                    </Column1>
                    <Column2>
                        <TeamWrapper data-aos="fade-up">
                            <TeamImgWrapper>
                                <TeamImg src={Image2}/>
                            </TeamImgWrapper>
                            <TeamTextWrapper>
                                <TeamText>Ehan Rahman</TeamText>
                                <TeamText>Head of Ops</TeamText>
                                <SocialIconLinks href="//www.twitter.com/EhanNation" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLinks>
                            </TeamTextWrapper>
                        </TeamWrapper>
                    </Column2>
                    <Column3>
                        <TeamWrapper data-aos="fade-up">
                            <TeamImgWrapper>
                                <TeamImg src={Image3}/>
                            </TeamImgWrapper>
                            <TeamTextWrapper>
                                <TeamText>Taskin Hossain</TeamText>
                                <TeamText>Lead Developer</TeamText>
                                <SocialIconLinks href="//www.twitter.com/thereal_taskin" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLinks>
                            </TeamTextWrapper>
                        </TeamWrapper>
                    </Column3>
                    <Column4>
                        <TeamWrapper data-aos="fade-up">
                            <TeamImgWrapper>
                                <TeamImg src={Image4}/>
                            </TeamImgWrapper>
                            <TeamTextWrapper>
                                <TeamText>Fyaaz Iqbal</TeamText>
                                <TeamText>Head PR</TeamText>
                                <SocialIconLinks href="//www.twitter.com/cryptoyaaz" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLinks>
                            </TeamTextWrapper>
                        </TeamWrapper>  
                    </Column4>
                </ColumnWrapper>
            </InfoContainer>
        </>
    )
}

export default Team
