import styled from 'styled-components';
import { 
    // Nav as RSNav, 
    // NavLink as RSNavLink, 
    // NavItem as RSNavItem,
    // Card as RSCard, 
    // CardText as RSCardText, 
    // Container as RSContainer, 
    // InputGroup as RSInputGroup, 
    Input as RSInput } from 'reactstrap';

export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #E6E6FA;
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
    background-color: #469ACA;
    margin: 5%;
    font-family: "DM Sans", sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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