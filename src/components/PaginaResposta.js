import React from 'react';
import { DivResposta, TituloReset, Button } from './styled';

const PaginaResposta = (props) => {
    const refreshPage = () => {
        window.location.reload();
    };
    
    return (
        <DivResposta>
            <TituloReset>{props.message}</TituloReset>
            <Button onClick={refreshPage}>{props.botao}</Button>
        </DivResposta>
    );
};

export default PaginaResposta;