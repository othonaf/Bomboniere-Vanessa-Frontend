import React, { useState, useRef } from 'react';
import { initReader, stopReader } from './LerCodBarras';
import axios from 'axios';
import { BiBarcodeReader } from "react-icons/bi";
import { RegistraDiv, InputText, DivInput, Button, DivRegisProd, TituloLogin, BotaoLoginDiv, ButtonCad, InteractiveDiv, InfoProduto } from './styled';
import { GiConfirmed } from "react-icons/gi";
import moment from 'moment';
import { TiWarning } from "react-icons/ti";
import Carregando from './Carregando';



const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app/api/', })

function RegistrarProduto() {
    const [code, setCode] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valordecompra, setValordecompra] = useState('');
    const [valordevenda, setValorDeVenda] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [setor, setSetor] = useState('');
    const [data, setData] = useState('');
    const [showScanner, setShowScanner] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const scannerRef = useRef(null);

    const codprod = code;
    const handleDetected = (data) => {
        setCode(data.codeResult.code);
        stopReader();
        setShowScanner(false);
        console.log(data);
    };

    const registraProduto = async () => {
        setLoading(true);
        try {
            const response = await backend.post('registraProduto',
                { codprod, descricao, valordecompra, valordevenda, vencimento, quantidade, setor });
            setData(response.data)
        } catch (error) {
            setError(error.response.data)
        }
        setLoading(false);
    }

    const startScanner = () => {
        setShowScanner(true); // Mostrar o scanner quando clicar no botão "Iniciar Leitura"
        initReader(handleDetected);
    };
    const handleDateChange = (e) => {
        const date = e.target.value; // a data no formato DD/MM/AAAA
        if (date.length === 10 && moment(date, "DD/MM/YYYY").isValid()) {
            const formattedDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD"); // convertendo para o formato AAAA-MM-DD
            setVencimento(formattedDate);
        } else {
            setVencimento(date);
        }
    };
    const refreshPage = () => {
        window.location.reload();
    };
    if (loading) {
        return <Carregando />;
    }

    return (
        <RegistraDiv id='registraProduto'>
            <DivRegisProd>
                <ButtonCad onClick={startScanner}>
                    <BiBarcodeReader size={40} /> Iniciar Leitura
                </ButtonCad>

                {showScanner && <InteractiveDiv id="interactive" ref={scannerRef} />}


                <TituloLogin>Código do Produto</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Código do Produto"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Descrição</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Valor de Compra</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Valor de Compra"
                        value={valordecompra}
                        onChange={(e) => setValordecompra(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Valor de Venda</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Valor de Venda"
                        value={valordevenda}
                        onChange={(e) => setValorDeVenda(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Quantidade</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Vencimento</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Vencimento"
                        value={vencimento}
                        onChange={handleDateChange}
                    />
                </DivInput>

                <TituloLogin>Setor</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Setor"
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                    />
                </DivInput>

                {error && <InfoProduto><TiWarning />{error}</InfoProduto>}
                {data && <InfoProduto><GiConfirmed /> {data}</InfoProduto>}
                <BotaoLoginDiv>
                    <Button onClick={registraProduto}>Registrar</Button>
                    <Button onClick={refreshPage}>Novo Produto</Button>
                </BotaoLoginDiv>

            </DivRegisProd>

        </RegistraDiv>
    );
}

export default RegistrarProduto;
