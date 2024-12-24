import {Container,HeaderLogo,Navbar,MenuContainer,MenuItem, HeaderAlignment, HamburgerMenu} from './styles'

import Button from '../Button'
import { useState } from 'react'

function Menu(){

    const [click, setClick] = useState(false)
    const iconMenu = <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    const iconClose = <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

    const toggleMenu = ()=>{
        return click? iconClose : iconMenu;
    }

    return(
        <Container>
            <Navbar>
                <HeaderAlignment> {/*Alinhamento da Logo e Nav, deixando mas proximo e um pouco afastado dos login*/}

                        <HeaderLogo>
                            Dint
                        </HeaderLogo>

                    <HamburgerMenu $click={click} onClick={()=>setClick(!click)}>
                        <span>{toggleMenu()}</span>
                    </HamburgerMenu>

                    <MenuContainer $click={click}>
                        <MenuItem>Feature</MenuItem>
                        <MenuItem>Company</MenuItem>
                        <MenuItem>Caroors</MenuItem>
                        <MenuItem>About</MenuItem>

                            <Button/>
                    </MenuContainer>

                </HeaderAlignment>
            </Navbar>
        </Container>
    )
}

export default Menu