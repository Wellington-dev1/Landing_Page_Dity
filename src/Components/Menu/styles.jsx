import styled from 'styled-components'

export const Container = styled.div` 
    
    border-radius: 5px;
    box-shadow: 1px 1px 10px #14183583;
    width: 100%;
    max-width: 1299px;
    margin:auto;
    
`
export const HeaderAlignment = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
`
export const Navbar = styled.nav`
    
    display: flex;
    justify-content: space-between;
    align-items:center;

    width: 92%;
    height: 6rem;
    margin: 0 auto;
    
`

export const HeaderLogo = styled.header`
    color:white;
    font-weight: bold;
    font-size: 2.1875rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    margin-right:6rem;
    padding: 1.25rem;
   
`

export const MenuContainer = styled.ul`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    padding: 10px;
    list-style: none;
       
        
        @media(max-width:920px){
        
            position: fixed;
            top:5.8rem;
            left: 0;
            right:0;

            width:100vw;
            height:calc(100vh - 5.8rem);
            bottom:0;
            z-index: 50;
            
            transform: ${({$click})=> $click? 'translateZ(0)': 'translateX(100%)'};
            background-color:#0b1416;
            transition: all 0.3s ease;
    
        
        flex-direction: column;
        justify-content: center;
    }

    
`

export const MenuItem = styled.li`
           
            color:white;
            margin:0 2rem;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            cursor: pointer;
            
            &::after{
                content: "";
                display: block;
                width: 0%;
                height: 2px;
                transition:width 0.3s ease ;
                background-color:lightblue;
            }


            &:hover {
                text-shadow: 0 0 5px #00dbde, 0 0 5px #c850c0;
            }

            &:hover::after{
                width:100%;
            }

            @media(max-width:920px){
                margin:  1.5rem 0 ;
                transform: translateY(-90px);  /* Ajustando altura das <li> no painel do click do mobile  */
            }
            
            `

export const HamburgerMenu = styled.span`
            color:#fff;
            display: none;
            cursor: pointer;

            @media(max-width:920px){
                display: flex;
            }

`