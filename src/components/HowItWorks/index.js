import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Poster1 from '../../images/comp1.png'
import Poster2 from '../../images/comp2.png'

import { 
    InfoContainer,
    InfoWrapper,
    ColumnWrapper,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    TopLine,
    Subtitle,
    HowItWorksPosterWrapper,
    HowItWorksPoster} from './howElements'

const HowItWorks = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
            <InfoContainer id="howitworks">
                <InfoWrapper>
                        <TextWrapper data-aos="fade-up">
                            <Heading>How It Works</Heading>
                            <TopLine>Mint</TopLine>
                            <Subtitle>Each crate will be randomly minted through candy-machine with zero input or sway from the team. NFT prizes in each crate are also pre-determined and pre-assigned to each crate</Subtitle>
                            <Subtitle>Associated prizes with your respective crates will be revealed within 48 hours of mint completion!</Subtitle>
                            <TopLine>Post-Mint</TopLine>
                            <Subtitle className='underline'>Here are some things you can partake in after minting</Subtitle>
                            <Subtitle>1)  Join our discord reveal party to find out who are the lucky 50% and who took an L</Subtitle>
                            <Subtitle>2)  If you took an L, don't cry just yet!</Subtitle>
                            <Subtitle>Those who got our SHIT RAINBOW CRATES can burn 5 of them to enter into our SOLANAMONKEYBUSINESS NFT raffle!</Subtitle>
                            <Subtitle>3)  Do whatever you want with your winnings, we couldn't care less</Subtitle>
                        </TextWrapper>
                </InfoWrapper>
                <ColumnWrapper>
                    <Column1>
                        <HowItWorksPosterWrapper data-aos="fade-right">
                            <HowItWorksPoster src={Poster1}/>
                        </HowItWorksPosterWrapper>
                    </Column1>
                    <Column2>
                        <HowItWorksPosterWrapper data-aos="fade-left">
                            <HowItWorksPoster src={Poster2}/>
                        </HowItWorksPosterWrapper>
                    </Column2>
                </ColumnWrapper>
            </InfoContainer>
            
        </>
    )
}

export default HowItWorks
