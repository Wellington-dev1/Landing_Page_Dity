import styled from 'styled-components'

export const ContainerImg = styled.div`
    width:50%;
    display: flex;
    
    img{
        width:100%;
        height:auto;
    }

    @media(min-width:64rem ){
        min-width:40vw;
    }
`