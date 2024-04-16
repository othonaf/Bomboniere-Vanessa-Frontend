import React from 'react';
import { DivCarregando, TituloReset } from './styled';
import { ClipLoader } from 'react-spinners';

const Carregando = () => {
    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
        borderWidth: "12px",
    };

    return (
        <DivCarregando style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <TituloReset>Carregando...</TituloReset>
            <ClipLoader 
                color={"blcak"} loading={true} css={override} size={150}
            />
        </DivCarregando>
    );
};

export default Carregando;