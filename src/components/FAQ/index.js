import React, {useEffect, useState} from 'react'
import {Data} from './Data'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Aos from "aos"
import "aos/dist/aos.css"
import { 
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    Heading,
    FAQWrapper,
    FAQContainer,
    Dropdown} from './faqElements'

const FAQ = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])



    return (
        <>
            <InfoContainer id='faq'>
                <InfoWrapper>
                        <TextWrapper data-aos="fade-up">
                            <Heading>FAQ</Heading>
                            <IconContext.Provider value={{color: 'black', size: '15px' }}>
                                <FAQContainer>
                                    {Data.map((item, index) => {
                                        return (
                                            <> 
                                                <FAQWrapper onClick={() => toggle(index)} key={index}>
                                                    <h1>{item.question}</h1>
                                                    <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                                                </FAQWrapper>
                                                {clicked === index ? (
                                                    <Dropdown className='content'>
                                                        <p>{item.answer}</p>
                                                    </Dropdown>
                                                ) : null}
                                            </>
                                        )
                                    })}
                                </FAQContainer>
                            </IconContext.Provider>
                        </TextWrapper>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FAQ
