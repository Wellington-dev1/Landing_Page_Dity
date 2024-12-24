import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 92%;
    min-height: 80vh;
    margin:0 auto;

    @media(max-width:1024px ){
        width: 85%;
    }
    
    @media(max-width:526px ){
        flex-direction:column-reverse;
        width: 100%;
        min-height: 75vh;

        &>*:first-child{
            width:80%;
        }

        > *:nth-child(2) {
            width:60%;
    }
    }
    `
export const ContainerAlignment = styled.div`
    
    width: 92%;
    height: 6rem;
    margin: 0 auto;
`