import styled from 'styled-components';
import {
    // Nav as RSNav, 
    // NavLink as RSNavLink, 
    NavItem as RSNavItem,
    // Card as RSCard, 
    // CardText as RSCardText, 
    // Container as RSContainer, 
    // InputGroup as RSInputGroup, 
    Input as RSInput
} from 'reactstrap';

// ------------------------------------- -- ---  DIV PAI:

export const Pai = styled.div`
    text-align: center;
`;

// ------------------------------------- -- ---  DIV HEADER:

export const HeaderDiv = styled.div`
    background-color: #FCF13D;
`;
export const NavItem = styled(RSNavItem)`
    font-family: "Lilita One", sans-serif;
    font-size: 25px;
`;

// ----------------------------------- - --- --  TELA DE LOGIN 
export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #603912;
`;
// ----------------------------------- - --- --  TELA DE CADASTRAR PRODUTO 
export const CadProd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #603912;
`;
export const DivScanner = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 30vh;
    width: 100%;
    
`;
export const InputText = styled(RSInput)`
    resize: vertical;
    min-height: 35px;
    width: 100%;
    font-size: medium;
    
`;
export const DivInput = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    align-items: center;
    justify-content: center;
    
`;
export const Button = styled.button`
    background-color: #FCF13D;
    margin: 5%;
    font-family: "Lilita One", sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: black;
    border-radius: 15px;
    align-items: center;
    width: 270px;
    height: 70px;
    cursor: pointer;
    margin-top: 5px;
    &:hover {
        background-color: #656161; 
    }
        
`;
export const BotaoConferir = styled.button`
    background-color: #469ACA;
    font-family: "DM Sans", sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    border: #469ACA;
    width: 270px;
    height: 100px;
    cursor: pointer;
    margin-left: 150px;
    margin-top: 5px;
    &:hover {
        background-color: #656161; 
    }
`;
export const DivLoginInt = styled.div`
    width: 30%;
    @media (max-width: 767px) {
        width: 70%;
    }
`;
export const TituloLogin = styled.h1`
    display: flex;
    color: black;
    justify-content: center;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0%;
    padding-bottom: 0%;
`;
export const BotaoLoginDiv = styled.div`
    padding-left: 15%;
    justify-content: center;
    width: 100%;
    @media (max-width: 767px) {
        padding-left: 10%;
        margin-right: 270px;
        margin-left: 0%;
    }
`;

// ----------------------------------- - --- --  TELA DE CONSULTAR PRODUTO 

export const InfoProduto = styled.p`
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: large;
    color: #FFFFFF;
`;