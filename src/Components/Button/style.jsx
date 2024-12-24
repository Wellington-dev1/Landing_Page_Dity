import styled from 'styled-components'



export const ContainerBtn = styled.div`
        margin-left: auto; /* Empurra o botão para o lado direito em telas maiores */
        
        @media (max-width: 920px) {
          margin-left: 0; /* Remove o alinhamento para a direita */
          transform: translateY(-60px);
        }
`

export const BtnLogin =styled.button`

    border: 1px solid transparent;
    border-radius:5px;
    background-color: transparent;
    color:#fff;

    cursor: pointer;
    margin: 0 0.125rem;
    padding:10px;
    transition: all 0.3s ease;

    &:hover{
        border-color: #ccc0c0b7;
    }
    @media (max-width: 920px) {
        margin:0 0.6rem;
    }
`
export const BtnRegister =styled(BtnLogin)`
    border-color: #ccc0c0b7;

    &:hover{
        background: #ccc0c0b7;
    }
`