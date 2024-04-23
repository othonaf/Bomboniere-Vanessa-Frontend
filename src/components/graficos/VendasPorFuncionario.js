import React, { useEffect, useRef } from 'react';
import { CanvaPieContainer } from '../styled';
import Chart from 'chart.js/auto';

function VendasPorFuncionario({ vendasPorVendedor }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    
    useEffect(() => {
        const colors = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime'];

        if (vendasPorVendedor && chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: vendasPorVendedor.map(item => item.nome),
                    datasets: [{
                        label: 'Vendas Por Vendedor',
                        data: vendasPorVendedor.map(item => item.quantidade),
                        backgroundColor: vendasPorVendedor.map((item, index) => colors[index % colors.length]), // Associa cada vendedor a uma cor
                        borderColor: 'black',
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'left', // Posiciona a legenda à esquerda
                        },
                    },
                },
            });
        }
    }, [vendasPorVendedor]);

    return (<CanvaPieContainer id='DivPieChart'>
        <canvas ref={chartRef}></canvas>
    </CanvaPieContainer>)

}

export default VendasPorFuncionario;
