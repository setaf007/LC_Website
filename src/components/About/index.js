import React, {useEffect} from 'react'
import Aos from "aos"
import Image from '../../images/png-1.png'
import Image2 from '../../images/degens.png'
import Poster from '../../images/aboutrates.png'
import "aos/dist/aos.css"
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    AboutPosterWrapper,
    AboutPoster} from './AboutElements'


const About = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
            <InfoContainer id='about'>
                <InfoWrapper>
                    <AboutPosterWrapper className='degenwrapper'>
                        <ImgWrap data-aos="fade-up">
                            <Img className='degens' src={Image2}/>
                        </ImgWrap>
                    </AboutPosterWrapper>
                    <AboutPosterWrapper>
                            <TextWrapper className='luck' data-aos="fade-up">
                                    <Heading>Try your luck</Heading> 
                                    <Subtitle className='lucky'>SOME OF THE BIGGEST SOLANA NFTs inside our crates!</Subtitle>
                                    <Subtitle className='lucky'>50% of crates have NFTs inside them</Subtitle>
                                    <Subtitle className='lucky'>The other 50% of crates enter you into our raffle for a SMB</Subtitle>
                            </TextWrapper>
                    </AboutPosterWrapper>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper data-aos="fade-up">
                                <Heading>About Us</Heading>
                                <Subtitle>CALLING ALL DEGENS!!!</Subtitle>
                                <Subtitle>Loaded Crates is a truly randomized loot-crate system where minters can uncrate high-valued NFTs from the Solana Ecosystem or enter a raffle for a SMB</Subtitle>
                                <Subtitle>100% of crates will contain something of value</Subtitle>
                                <Subtitle>50% of crates will have NFTs inside them</Subtitle>
                                <Subtitle>The other 50% of crates enter you into a raffle for a SMB</Subtitle>
                                <Subtitle>GOLD CRATES WILL CONTAIN NFTs WORTH 8-10 SOL</Subtitle>
                                <Subtitle className='underline'>UTILITIES</Subtitle>
                                <Subtitle>Your SHIT rainbow crates enter you into a raffle to a SMB</Subtitle>
                                <Subtitle>What more do you snowflakes want?</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap data-aos="fade-right">
                                <Img src={Image}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                <AboutPosterWrapper>
                    <AboutPoster src={Poster} data-aos="fade-up"/>
                </AboutPosterWrapper>
            </InfoContainer> 
        </>
    )
}

export default About
