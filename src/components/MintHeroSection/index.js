import React from 'react'
import Image from '../../images/beach.jpg'
import Chest from '../../images/chest_silver.png'
import { Button } from '../ButtonElement'
import {
    MintHeroContainer,
    MintHeroBg,
    MintImgBg,
    MintHeroContent,
    MintHeroBtnWrapper,
    ChestWrapper,
    ChestImg
} from './MintHeroElements'

const MintHeroSection = () => {
    return (
        <MintHeroContainer>
            <MintHeroBg>
                <MintImgBg src={Image} type='image/jpeg'/>
            </MintHeroBg>
            <MintHeroContent>
                <ChestWrapper>
                    <ChestImg src={Chest}/>
                </ChestWrapper>
                <MintHeroBtnWrapper>
                    <Button primary="true" dark="true">
                        Mint
                    </Button>
                </MintHeroBtnWrapper>
            </MintHeroContent>    
        </MintHeroContainer>
    )
}

export default MintHeroSection
