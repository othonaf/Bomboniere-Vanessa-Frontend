import React, { useState, useRef } from 'react';
import { initReader, stopReader } from './LerCodBarras';
import axios from 'axios';
import { LoginDiv, InputText, DivInput, Button, DivLoginInt, TituloLogin, BotaoLoginDiv } from './styled'


const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app/api/', })

function IndexPage() {
    const [code, setCode] = useState('');
    // const [codprod, setCodProd] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valordecompra, setValordecompra] = useState('');
    const [valordevenda, setValorDeVenda] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [setor, setSetor] = useState('');
    const [data, setData] = useState('');
    const [showScanner, setShowScanner] = useState(true);
    const [error, setError] = useState(null);
    const scannerRef = useRef(null);

    const codprod = code;
    const handleDetected = (data) => {
        setCode(data.codeResult.code);
        stopReader();
        setShowScanner(false);
        console.log(data);
    };

    const registraProduto = async () => {
        try {
            const response = await backend.post('registraProduto',
                { codprod, descricao, valordecompra, valordevenda, vencimento, quantidade, setor });
            setData(response.data)
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

                {/* Renderizar o scanner apenas quando showScanner for true */}
                {showScanner && <div id="interactive" ref={scannerRef} />}
                <TituloLogin>Código do Produto</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Nome de usuário"
                        value={codprod}
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
                        placeholder="Valor de Venda"
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
                        onChange={(e) => setVencimento(e.target.value)}
                    />
                </DivInput>

                <TituloLogin>Setor</TituloLogin>
                <DivInput>
                    <InputText
                        type="text"
                        placeholder="Vencimento"
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                    />
                </DivInput>

                {error && <p>{error}</p>}
                {data && <p>{data}</p>}
                <BotaoLoginDiv>
                    <Button onClick={registraProduto}>Registrar</Button>
                </BotaoLoginDiv>

            </DivLoginInt>

        </LoginDiv>
    );
}

export default IndexPage;
