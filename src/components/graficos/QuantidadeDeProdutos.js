import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function QuantidadeDeProdutos({ data, elemento }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (data && chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => `${item[elemento].toString().padStart(2, '0')}:00`),
                    datasets: [{
                        label: 'Quantidade de Produtos Vendidos',
                        data: data.map(item => item.quantidade),
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [data, elemento]);

    return <canvas ref={chartRef} width="400" height="200"></canvas>;
}

export default QuantidadeDeProdutos;
