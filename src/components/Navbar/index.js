import React, {useState, useEffect} from 'react'
import Logo from '../../images/loadedcrates.png'
import { FaBars } from 'react-icons/fa'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { 
    Nav,
    NavbarContainer, 
    NavLogo,
    LoadedcratesLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    SocialIconLinks,
    SocialIcons,
    MintLink } 
    from './NavbarElements'

const Navbar = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: 'gold'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><LoadedcratesLogo src={Logo}/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth = {true} 
                            duration = {500}
                            spy = {true} 
                            exact = 'true' 
                            offset = {-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="howitworks" 
                            smooth = {true} 
                            duration = {500}
                            spy = {true} 
                            exact = 'true' 
                            offset = {-80}
                            >How it works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" 
                            smooth = {true} 
                            duration = {500}
                            spy = {true} 
                            exact = 'true' 
                            offset = {-80}
                            >The Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq" 
                            smooth = {true} 
                            duration = {500}
                            spy = {true} 
                            exact = 'true' 
                            offset = {-80}
                            >FAQ</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink><MintLink>Mint closed!</MintLink></NavBtnLink>
                        <SocialIcons>
                            <SocialIconLinks href="//www.discord.gg/bQxnh8hFGY" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLinks>
                            <SocialIconLinks href="//www.twitter.com/LoadedCrates" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLinks>
                        </SocialIcons>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>        
        </>
    )
}

export default Navbar
