import React from 'react'
import Image1 from '../../images/chest_gold.png'
import Image2 from '../../images/chest_silver.png'
import Image3 from '../../images/chest_bronze.png'
import {
    SectionDividerContainer,
    DividerBg,
    DividerImgContainer,
    ChestImg
} from './SectionDivElements'

const SectionDivider = () => {
    return (
        <SectionDividerContainer>
            <DividerBg></DividerBg>
            <DividerImgContainer>
                <ChestImg src={Image1} alt=''/>
                <ChestImg src={Image2} alt=''/>
                <ChestImg src={Image3} alt=''/>
            </DividerImgContainer>
        </SectionDividerContainer>
    )
}

export default SectionDivider
