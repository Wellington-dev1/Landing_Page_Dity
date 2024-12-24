import styled from "styled-components";

export const ContainerText = styled.div`
    width:50%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   
    .principal{
        font-size:3.125rem;
        color:#fff;
        font-weight: bold;
        margin-bottom: 20px;

        @media(max-width:526px ){
            font-size:30px;
            width:100%;
            height: 100%;
           
        }
    }

    span{
        color:#ddd;

        @media(max-width:526px ){
            font-size:14px;
        }
    }

    button{
        cursor: pointer;
        color: #fff;
        background-color: #d64444;

        padding:15px;
        outline: none;
        border: none;
       

        border-radius:5px;
        margin-top: 2.5rem ;
        transition: all 0.3s ease;
        
        &:hover{
            background-color:#444242;
    
        }

        @media(max-width:526px ){
            padding:10px;
            margin: 10px 0;
        }
    }
`