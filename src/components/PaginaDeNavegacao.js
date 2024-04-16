import React from 'react';
import { TelaNavegacao, BotaoNavegacaonDiv, ButtonNav } from './styled';
import { useNavigate } from 'react-router-dom';


function PaginaDeNAvegacao() {
    const navigate = useNavigate()

    const produtosNavigate = () => {
        navigate("/RegistrarProduto");
    };
    const consultNavigate = () => {
        navigate("/buscarProduto");
    };
    const vendaNavigate = () => {
        navigate("/");
    };
    const consultVendaNavigate = () => {
        navigate("/");
    };
    const dashboardNavigate = () => {
        navigate("/");
    };

    return (
        <TelaNavegacao>
            <BotaoNavegacaonDiv>
                <ButtonNav onClick={produtosNavigate}>Cadastrar Produto</ButtonNav>
                <ButtonNav onClick={consultNavigate}>Consultar Produto</ButtonNav>
                <ButtonNav onClick={vendaNavigate}>Realizar Venda</ButtonNav>
                <ButtonNav onClick={consultVendaNavigate}>Consultar uma Venda</ButtonNav>
                <ButtonNav onClick={dashboardNavigate}>Visualizar Métricas</ButtonNav>
            </BotaoNavegacaonDiv>
            
        </TelaNavegacao>



    );
}

export default PaginaDeNAvegacao;
