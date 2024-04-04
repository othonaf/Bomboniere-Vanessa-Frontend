import React, { useState, useRef } from 'react';
import { initReader, stopReader } from './LerCodBarras';
import axios from 'axios';
import { LoginDiv, InputText, DivInput, Button, DivLoginInt, TituloLogin, BotaoLoginDiv } from './styled'


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
            setData(response.data)
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
        <LoginDiv>
            <DivLoginInt>
                <Button onClick={startScanner}>
                    Iniciar Leitura
                </Button>
                {code}

                {showScanner && <div id="interactive" ref={scannerRef} />}
                <TituloLogin>Código do Produto</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Código do Produto"
                        value={codprod}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </DivInput>
                {error && <p>{error.message}</p>}

                {data && <p>Descrição: {data.descricao}</p>}
                {/* {data && <p>Quantidade: {data.quantidade}</p>}
                {data && <p>Setor: {data.setor}</p>}
                {data && <p>Valor de Compra: {data.valordecompra}</p>}
                {data && <p>Valor de Venda: {data.valordevenda}</p>}
                {data && <p>Vencimento: {data.vencimento}</p>} */}
                <BotaoLoginDiv>
                    <Button onClick={selecionaProduto}>Registrar</Button>
                </BotaoLoginDiv>

            </DivLoginInt>

        </LoginDiv>
    );
}
export default BuscarProduto;