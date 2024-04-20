import React, { useState } from 'react';
import axios from 'axios';
import { TiWarning } from "react-icons/ti";
import { DivMetricas, InfoProduto, DivInputsMetricas, Button, DivData, Canva, InfoLucro, DivRadios } from "./styled";
import QuantidadeDeProdutos from './graficos/QuantidadeDeProdutos';
import RendimentosPorTempo from './graficos/RendimentoPorTempo';
import VendasPorFuncionario from './graficos/VendasPorFuncionario';
import { FormGroup, Label, Input } from 'reactstrap';
import Carregando from './Carregando';

const backend = axios.create({ baseURL: 'https://gerenciador-estoque-backend-gi4a.vercel.app' , })
//'http://localhost:3003'
function PaginaDeMetricas() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState(null); // Adicione um novo estado para armazenar os dados
    const [error, setError] = useState(null);
    const [lucro, setLucro] = useState('');
    const [endpoint, setEndpoint] = useState('');
    const [elemento, setElemento] = useState('');
    const [vendasPorVendedor, setVendaPorVendedor] = useState('');
    const [loading, setLoading] = useState(false);



    const gerarGraficos = async () => {
        setLoading(true);
        switch (endpoint) {
            case 'vendasPorHora':
                setElemento('hora')
                break;
            case 'vendasPorDiasNaSemana':
                setElemento('dia')
                break;
            case 'vendasPorSemana':
                setElemento('semana')
                break;
    
            default:
                break;
        }
        try {
            const token = localStorage.getItem('token');
            const formattedStartDate = `${startDate}T00:00:00`;
            const formattedEndDate = `${endDate}T23:59:59`;


            const response = await backend.get(`/api/${endpoint}`, {
                params: { dataInicio: formattedStartDate, dataFim: formattedEndDate },
                headers: { Authorization: `${token}` }
            });

            console.log(response.data)
            if (response && response.data) {
                setData(response.data.vendasPorTempo);
                setLucro(response.data.totalLucro);
                setVendaPorVendedor(response.data.vendasPorVendedor)
                console.log(response.data.totalLucro)
                console.log(response.data.vendasPorVendedor)
            } else {
                console.error('Response or response.data is undefined');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.response.data)
        }
        setLoading(false);
    };
    
    if (loading) {
        return <Carregando />;
    }
    return (
        <DivMetricas id='metricas'>
            <DivInputsMetricas>
                <InfoProduto>Gráficos de Métricas</InfoProduto>
                <InfoProduto>Como deseja visualizar os Dados?</InfoProduto>
                <DivRadios>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" id="hora" name="endpoint" value="vendasPorHora" checked={endpoint === 'vendasPorHora'} onChange={(e) => setEndpoint(e.target.value)} />
                            <Label for="hora">Vendas Por Horas do Dia</Label><br />
                            <Input type="radio" id="dia" name="endpoint" value="vendasPorDiasNaSemana" checked={endpoint === 'vendasPorDiasNaSemana'} onChange={(e) => setEndpoint(e.target.value)} />
                            <Label for="dia">Vendas Por Dias da Semana </Label><br />
                            <Input type="radio" id="semana" name="endpoint" value="vendasPorSemana" checked={endpoint === 'vendasPorSemana'} onChange={(e) => setEndpoint(e.target.value)} />
                            <Label for="semana">Vendas Por Semanas do Mês</Label><br />
                        </Label>
                    </FormGroup>
                </DivRadios>
                <DivData>
                    <InfoProduto>Insira a Data Inicial </InfoProduto>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </DivData>
                <DivData>
                    <InfoProduto>Insira a Data Final </InfoProduto>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </DivData>
                <Button onClick={gerarGraficos}>Gerar Gráficos</Button>
            </DivInputsMetricas>
            {lucro && <InfoLucro>Total de Rendimentos no período: {Number(lucro).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</InfoLucro>}

            <Canva>
                {data && <QuantidadeDeProdutos data={data} elemento={elemento} />}
                {data && <RendimentosPorTempo data={data} elemento={elemento} />}
                {vendasPorVendedor && <VendasPorFuncionario vendasPorVendedor={vendasPorVendedor}/>}
            </Canva>

            {error && <InfoProduto><TiWarning />{error}</InfoProduto>}
        </DivMetricas>
    );
}

export default PaginaDeMetricas;
