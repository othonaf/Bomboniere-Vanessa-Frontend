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



const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app/api/', });

function RegistraVenda() {
    const [showScanner, setShowScanner] = useState(true);
    const [error, setError] = useState(null);
    const [code, setCode] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [finalizado, setFinalizado] = useState(false);
    const scannerRef = useRef(null);

    const handleDetected = (data) => {
        const barcode = data.codeResult.code;
        setCode(barcode);
        stopReader();
        setShowScanner(false);
        if (barcode) {
            selecionaProduto(barcode);
        }
    };

    const selecionaProduto = async (barcode) => {
        setLoading(true);
        try {
            const response = await backend.get('consultaProduto', { params: { codprod: barcode } });
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
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    const calcularValorTotal = () => {
        return produtos.reduce((total, produto) => total + produto.valordevenda * produto.quantidade, 0);
    }

    const registraVenda = async () => {
        setLoading(true);
        try {
            const valorTotal = calcularValorTotal();
            const usuario = '6265217348'; // Substitua pelo nome do usuário real
            const listaDeCompras = produtos.map(produto => ({
                codprod: produto.codprod,
                quantidade: produto.quantidade,
                valordecompra: produto.valordecompra,
                valordevenda: produto.valordevenda
            }));
            const response = await backend.post('registraVenda', { valorTotal, usuario, listaDeCompras });
            setProdutos([]);
            setData(response.data)
            console.log(response)
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
            mensagem = <InfoProduto><TiWarning />{error}</InfoProduto>;
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
                {error && <InfoProduto>{error.message}</InfoProduto>}
                {data && <InfoProduto>{data}</InfoProduto>}

                {produtos.map((produto, index) => (
                    <CardProduto
                        key={index}
                        produto={produto}
                        onChangeQuantidade={(novaQuantidade) => {
                            const novosProdutos = [...produtos];
                            novosProdutos[index].quantidade = parseInt(novaQuantidade);
                            setProdutos(novosProdutos);
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
