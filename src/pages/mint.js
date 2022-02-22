import React, {useState} from 'react'
import MintHeroSection from '../components/MintHeroSection'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'

const Mint = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <MintHeroSection />    
        </>
    )
}

export default Mint
