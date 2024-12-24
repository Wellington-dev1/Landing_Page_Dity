import styled from 'styled-components'

export const ContainerImg = styled.div`
    cursor: pointer;
    width:92%;
    margin:0 auto;

    
    @media(max-width:526px){
        
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    
    
    img{
        margin:0 10px ;
        width:26px;
        height: auto;
        
        &:hover{
            background: #ccc0c0b7;
            border-radius:5px;
        }

        @media(max-width:526px ){
                margin:18px 8px ;
            }
    }

`