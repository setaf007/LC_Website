import React from 'react'
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink
 } from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="home" onClick={toggle}>
                        Home
                    </SideBarLink>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="howitworks" onClick={toggle}>
                        How It Works
                    </SideBarLink>
                    <SideBarLink to="team" onClick={toggle}>
                        The Team
                    </SideBarLink>
                    <SideBarLink to="faq" onClick={toggle}>
                        FAQ
                    </SideBarLink>
                </SideBarMenu>
                {/* <SideBtnWrap>
                    <SideBarRoute to='/mint' onClick={toggle}>Mint unavailable</SideBarRoute>
                </SideBtnWrap> */}
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
