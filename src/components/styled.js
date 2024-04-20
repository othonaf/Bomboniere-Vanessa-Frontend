import styled from 'styled-components';
import {
    // Nav as RSNav, 
    // NavLink as RSNavLink, 
    NavItem as RSNavItem,
    UncontrolledCarousel as RSUncontrolledCarousel,
    Card as RSCard, 
    CardText as RSCardText, 
    CardBody as RSCardBody, 
    CardTitle as RSCardTitle,
    // Container as RSContainer, 
    // InputGroup as RSInputGroup, 
    Input as RSInput
} from 'reactstrap';

// ------------------------------------- -- ---  DIV PAI:

export const Pai = styled.div`
    text-align: center;
    align-items: center;
    width: auto;
    height: auto;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

// ------------------------------------- -- ---  DIV HEADER:

export const HeaderDiv = styled.div`
    background-color: #fcd63d;
`;
export const NavItem = styled(RSNavItem)`
    font-family: "Lilita One", sans-serif;
    font-size: 25px;
    color: black;
`;
// ------------------------------------- -- ---  DIV CARREGANDO:
export const DivCarregando = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fcd63d;;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;
// ------------------------------------- -- ---  DIV CARD_PRODUTO:
export const Card = styled(RSCard)`
    background-color: grey;
    border-radius: 15px;
    margin-bottom: 3%;
    margin-left: 15%;
    width: 70%;
    align-items: center;
    justify-content: center;
`;
export const CardText = styled(RSCardText)`
    font-family: "Lilita One", sans-serif;
`;
export const CardBody = styled(RSCardBody)`
    
`;
export const CardTitle = styled(RSCardTitle)`
    font-family: "Lilita One", sans-serif;
    font-size: 25px;
`;


// ------------------------------------- -- ---  PAGINA RESPOSTA:
export const DivResposta = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #603814;;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;
// ----------------------------------- - --- --  TELA DE NAVEGAÇÃO (PÓS-LOGIN)

export const TelaNavegacao = styled.div`
    background-color: grey; //603814
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    @media (max-width: 767px) {
        
    }
`;
export const BotaoNavegacaonDiv = styled.div`
    padding-top: 2%;
    padding-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 767px) {
        padding-left: 10%;
        margin-right: 20px;
        margin-left: 0%;
    }
`;
export const ButtonNav = styled.button`
    background-color: #fcd63d;
    margin: 2%;
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


// ----------------------------------- - --- --  TELA DE LOGIN 
export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    background-color: #603912;
`;
export const DivLoginInt = styled.div`
    width: 40%;
    @media (max-width: 767px) {
        width: 70%;
    }
`;
export const BotaoLoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 767px) {
        padding-left: 10%;
        margin-right: 270px;
        margin-left: 0%;
    }
`;
export const DivInputLogin = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    justify-content: center;
    width: auto;
    
`;
export const ButtonLogin = styled.button`
    background-color: #fcd63d;
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

export const LinkLogin = styled.a`
    text-decoration: none;
    color: white;
    font-family: "Lilita One", sans-serif;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-size: 25px;

`;
// ----------------------------------- - --- --  TELA DE ENVIAR EMAIL PARA RESET DE SENHA: 

export const EnviarEmail = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: auto;
    width: auto;
    background-color: #603814;
    @media (max-width: 767px) {
        width: auto;
    }
`;
export const TituloReset = styled.h1`
    
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    justify-content: center;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0%;
    padding-bottom: 0%;
`;

export const DivFormEmail = styled.div`
    padding-top: 10%;
    align-items: center;
    align-content: center;
    width: 100%;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

// ----------------------------------- - --- --  TELA DE CADASTRAR PRODUTO 
export const RegistraDiv = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: auto;
    width: auto;
    background-color: #603814;
    @media (max-width: 767px) {
        width: auto;
    }
`;

export const CadProd = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: auto;
    width: 100%;
    background-color: #603814;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const DivRegisProd = styled.div`
    align-items: center;
    align-content: center;
    width: 50%;
    @media (max-width: 767px) {
        width: auto;
    }
`;
export const DivScanner = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding-top: 0%;
    width: auto;

    @media (max-width: 767px) {
        width: auto;
        padding-left: 30%;
    }
    
`;
export const InteractiveDiv = styled.div`
    padding-left: 15%;
    width: auto;
    height: 50%;
`;

export const ButtonCad = styled.button`
    background-color: #fcd63d;
    justify-content: center;
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
export const DivForm = styled.div`
    align-items: center;
    align-content: center;
    width: 50%;
    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const InputText = styled(RSInput)`
    resize: vertical;
    min-height: 35px;
    width: 50%;
    font-size: medium;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin-left: 10%;
        width: auto;
    }
    
`;
export const DivInput = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    /* padding-left: 20%; */
    justify-content: center;
    align-items: center;
    width: auto;
    
`;
export const Button = styled.button`
    background-color: #fcd63d;
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

export const TituloLogin = styled.h1`
    display: flex;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    justify-content: center;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0%;
    padding-bottom: 0%;
`;

// ----------------------------------- - --- --  TELA DE CRIAR UM LOGIN

export const CriarLoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    background-color: #603912;
`;
export const ErrorMessage = styled.p`
    font-family: "Lilita One", sans-serif;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: red;
    font-weight: 400;
    font-style: normal;
    font-size: larger;
    color: #FFFFFF;
`;

// ----------------------------------- - --- --  TELA DE CONSULTAR PRODUTO 

export const InfoProduto = styled.p`
    font-family: "Lilita One", sans-serif;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: white;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;
    color: #FFFFFF;
`;
export const DivInputConsulta = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    justify-content: center;
    align-items: center;
    width: auto;
    @media (max-width: 767px) {
        padding-right: 8%;   
    }
    
`;

export const DivBotaoConsultaProd = styled.div`
    padding-left: 28%;
    justify-content: center;
    width: 70%;
    @media (max-width: 767px) {
        padding-left: 13%;
        margin-right: 270px;
        margin-left: 0%;
    }
`;

// ----------------------------------- - --- --  DIV DO FOOTER 

export const DivFooter = styled.div`
  background-color: #603814;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: "Lilita One", sans-serif;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: larger;
  height: 50vh;
  padding-top: 5%;
  color: white;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const DivLocal = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: end;
  }
`;
export const DivContato = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2%;
`;
export const ContatoWhats = styled.a`
  text-decoration: none;
  color: white;
`;
export const DivCnpj = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

// ----------------------------------- - --- --  TELA INCIAL "CONTENT" 

export const UncontrolledCarousel = styled(RSUncontrolledCarousel)`
    display: flex;
    height: 50%;
    width: 95%;
    
`;
export const DivCarousel = styled.div`
    background-color: grey; //603814
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
`;
// ----------------------------------- - --- --  PAGINA DE METRICAS

export const DivMetricas = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
`;
export const DivInputsMetricas = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const DivData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
`;
export const Canva = styled.div`
    width: 70%;
`;
export const InfoLucro = styled.p`
    font-family: "Lilita One", sans-serif;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    color: brown;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;
`;
export const DivRadios = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
`;

export const CanvaPieContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    height: 50%;
`;