import React, { useEffect, useRef } from 'react';
import { CanvaPieContainer } from '../styled';
import Chart from 'chart.js/auto';

function VendasPorFuncionario({ vendasPorVendedor }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (vendasPorVendedor && chartRef.current) {
            console.log(vendasPorVendedor)
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'pie', // Altere 'pizza' para 'pie' aqui
                data: {
                    labels: vendasPorVendedor.map(item => item.vendedor), // Aqui devem ser os vendedores
                    datasets: [{
                        label: 'Vendas Por Vendedor',
                        data: vendasPorVendedor.map(item => item.quantidade), // Aqui devem ser as quantidades de vendas
                        backgroundColor: 'green',
                        borderColor: 'blue',
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [vendasPorVendedor]);

    return (<CanvaPieContainer>
        <canvas ref={chartRef}></canvas>
    </CanvaPieContainer>)

}

export default VendasPorFuncionario;
