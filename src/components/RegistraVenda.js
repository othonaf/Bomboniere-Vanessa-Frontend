import React, { useState, useRef } from 'react';
import { BiBarcodeReader } from "react-icons/bi";
import { initReader, stopReader } from './LerCodBarras';
import axios from 'axios';
import { CadProd, InputText, DivInputConsulta, Button, DivForm, TituloLogin, DivBotaoConsultaProd, InfoProduto, } from './styled';
import { TiWarning } from "react-icons/ti";
import Carregando from './Carregando';
import PaginaResposta from './PaginaResposta';
import CardProduto from './CardProduto';
import { GiConfirmed } from "react-icons/gi";

const backend = axios.create({ baseURL: 'http://localhost:3003', });
//  'https://gerenciador-estoque-backend-gi4a.vercel.app'

function RegistraVenda() {
    const [showScanner, setShowScanner] = useState(true);
    const [error, setError] = useState(null);
    const [code, setCode] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [finalizado, setFinalizado] = useState(false);
    const [qtde_total_prod, setQtdeTotalProd] = useState(0);
    const scannerRef = useRef(null);

    const handleDetected = (data) => {
        const barcode = data.codeResult.code;
        stopReader();
        setShowScanner(false);
        if (barcode) {
            setCode(barcode);
            selecionaProduto(barcode);
        }
    };

    const selecionaProduto = async (barcode) => {
        setLoading(true);
        try {
            const response = await backend.get('/api/consultaProduto', { params: { codprod: barcode } });
            if (response.status === 201) {
                window.alert(response.data)
            } else if (response.status === 200) {
                const produto = response.data[0];
                const novoProduto = {
                    codprod: produto.codprod,
                    descricao: produto.descricao,
                    valordecompra: produto.valordecompra,
                    valordevenda: produto.valordevenda,
                    quantidade: 1 // Inicializa a quantidade como 1 ao adicionar o produto
                };
                setProdutos([...produtos, novoProduto]);
                setCode('');
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    const calcularQtdeProdutos = () => {
        const totalProdutos = produtos.reduce((total, produto) => total + produto.quantidade, 0);
        setQtdeTotalProd(totalProdutos);
    };

    const calcularValorTotal = () => {
        return produtos.reduce((total, produto) => total + produto.valordevenda * produto.quantidade, 0);
    };

    const registraVenda = async () => {
        setLoading(true);
        try {
            const valorTotal = calcularValorTotal();
            const token = localStorage.getItem('token');
            const listaDeCompras = produtos.map(produto => ({
                codprod: produto.codprod,
                quantidade: produto.quantidade,
                valordecompra: produto.valordecompra,
                valordevenda: produto.valordevenda
            }));
            console.log(listaDeCompras)
            const response = await backend.post('/api/registraVenda',
                { valorTotal, listaDeCompras, qtde_total_prod },
                { headers: { Authorization: `Bearer ${token}` } });
            setProdutos([]);
            setData(response.data)

        } catch (error) {
            setError(error);
        }
        setLoading(false);
        setFinalizado(true);
    };

    const startScanner = () => {
        setShowScanner(true);
        initReader(handleDetected);
    };

    if (loading) {
        return <Carregando />;
    };

    if (finalizado) {
        let mensagem;
        if (error) {
            mensagem = <InfoProduto><TiWarning />{error.message}</InfoProduto>;
        } else if (data) {
            mensagem = <InfoProduto><GiConfirmed /> {data}</InfoProduto>;
        }
        return (
            <PaginaResposta
                message={mensagem}
                botao={'Nova Venda'} />
        )
    };

    return (
        <CadProd>
            <DivForm>
                <Button onClick={startScanner}>
                    Iniciar Leitor <BiBarcodeReader size={40} />
                </Button>

                {showScanner && <div id="interactive" ref={scannerRef} />}
                <TituloLogin>Código do Produto:</TituloLogin>
                <DivInputConsulta>
                    <InputText
                        type="text"
                        placeholder="Código do Produto"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </DivInputConsulta>

                {produtos.map((produto, index) => (
                    <CardProduto
                        key={index}
                        produto={produto}
                        onChangeQuantidade={(novaQuantidade) => {
                            const novosProdutos = [...produtos];
                            novosProdutos[index].quantidade = parseInt(novaQuantidade);
                            setProdutos(novosProdutos);
                            calcularQtdeProdutos(novaQuantidade)
                        }}
                    />
                ))}

                <DivBotaoConsultaProd>
                    <Button onClick={selecionaProduto}>Adicionar Produto</Button>
                    <Button onClick={registraVenda}>Finalizar Venda</Button>
                </DivBotaoConsultaProd>

                <InfoProduto>Total: {Number(calcularValorTotal()).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</InfoProduto>

            </DivForm>
        </CadProd>
    );
}

export default RegistraVenda;
