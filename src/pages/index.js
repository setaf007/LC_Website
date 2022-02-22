import React, {useState} from 'react'
import SideBar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import SectionDivider from '../components/SectionDivider'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            <HeroSection />
            <SectionDivider />
            <About />
            <SectionDivider />
            <HowItWorks />
            <SectionDivider />
            <Team />
            <SectionDivider />
            <FAQ />
            <Footer />   
        </>
    )
}

export default Home
