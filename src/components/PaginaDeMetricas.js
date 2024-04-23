import React, { useState } from 'react';
import axios from 'axios';
import { TiWarning } from "react-icons/ti";
import { DivMetricas, InfoProduto, DivInputsMetricas, Button, DivData, Canva, InfoLucro, DivRadios, InfoData, InputDate} from "./styled";
import QuantidadeDeProdutos from './graficos/QuantidadeDeProdutos';
import RendimentosPorTempo from './graficos/RendimentoPorTempo';
import VendasPorFuncionario from './graficos/VendasPorFuncionario';
import { FormGroup, Label, Input } from 'reactstrap';
import Carregando from './Carregando';

const backend = axios.create({ baseURL:'http://localhost:3003' , })
//'https://gerenciador-estoque-backend-gi4a.vercel.app'
function PaginaDeMetricas() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState(null); // Adicione um novo estado para armazenar os dados
    const [error, setError] = useState(null);
    const [lucro, setLucro] = useState('');
    const [endpoint, setEndpoint] = useState('vendasPorDia');
    const [elemento, setElemento] = useState('');
    const [vendasPorVendedor, setVendaPorVendedor] = useState('');
    const [loading, setLoading] = useState(false);



    const gerarGraficos = async () => {
        setLoading(true);
        switch (endpoint) {
            case 'vendasPorDia':
                setElemento('hora')
                break;
            case 'vendasPorSemana':
                setElemento('dia')
                break;
            case 'vendasPorMes':
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
            console.log(endpoint)
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
                    <FormGroup>
                        <Label for="select">Selecione uma opção</Label>
                        <Input type="select" name="endpoint" id="select" value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
                            <option value="vendasPorDia">Vendas Por Dia</option>
                            <option value="vendasPorSemana">Vendas Por Semana</option>
                            <option value="vendasPorMes">Vendas Por Mês</option>
                        </Input>
                    </FormGroup>
                </DivRadios>
                <DivData>
                    <InfoData>Insira a Data Inicial:</InfoData>
                    <InputDate
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </DivData>
                <DivData>
                    <InfoData>Insira a Data Final:</InfoData>
                    <InputDate
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
                {vendasPorVendedor && <VendasPorFuncionario vendasPorVendedor={vendasPorVendedor} />}
            </Canva>

            {error && <InfoProduto><TiWarning />{error}</InfoProduto>}
        </DivMetricas>
    );
}

export default PaginaDeMetricas;
