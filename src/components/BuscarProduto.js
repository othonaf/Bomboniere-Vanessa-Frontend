import React, { useState, useRef } from 'react';
import { initReader, stopReader } from './LerCodBarras';
import axios from 'axios';
import { CadProd, InputText, DivInput, Button, DivLoginInt, TituloLogin, BotaoLoginDiv, InfoProduto, DivScanner } from './styled'


const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app/api/', })

function BuscarProduto() {
    const [showScanner, setShowScanner] = useState(true);
    const [error, setError] = useState(null);
    const [code, setCode] = useState('');
    const [data, setData] = useState('');
    const scannerRef = useRef(null);


    const handleDetected = (data) => {
        setCode(data.codeResult.code);
        stopReader();
        setShowScanner(false);
        console.log(data);
    };

    const codprod = code;
    const selecionaProduto = async () => {
        try {
            console.log(code)
            const response = await backend.get('consultaProduto', { params: { codprod } })
            setData(response.data[0])
            console.log(response)
        } catch (error) {
            setError(error)
        }
    }

    const startScanner = () => {
        setShowScanner(true); // Mostrar o scanner quando clicar no botão "Iniciar Leitura"
        initReader(handleDetected);
    };
    return (
        <CadProd>
            <DivLoginInt>
                <Button onClick={startScanner}>
                    Iniciar Leitor
                </Button>
                {code}

                {showScanner && <DivScanner id="interactive" ref={scannerRef} />}
                <TituloLogin>Código do Produto:</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Código do Produto"
                        value={codprod}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </DivInput>
                {error && <InfoProduto>{error.message}</InfoProduto>}

                {data && <InfoProduto>Descrição: {data.descricao}</InfoProduto>}
                {data && <InfoProduto>Quantidade em Estoque: {data.quantidade}</InfoProduto>}
                {data && <InfoProduto>Setor: {data.setor}</InfoProduto>}
                {data && <InfoProduto>Valor: {Number(data.valordevenda).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</InfoProduto>}
                {data && <InfoProduto>Vencimento: {new Date(data.vencimento).toLocaleDateString('pt-BR')}</InfoProduto>}

                <BotaoLoginDiv>
                    <Button onClick={selecionaProduto}>Buscar</Button>
                </BotaoLoginDiv>

            </DivLoginInt>

        </CadProd>
    );
}
export default BuscarProduto;