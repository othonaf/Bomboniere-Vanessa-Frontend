import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function RendimentosPorTempo({ data, elemento }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    

    useEffect(() => {
        console.log(data)
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
                        label: 'Rendimentos (R$)',
                        data: data.map(item => parseFloat(item.totallucro)),
                        backgroundColor: 'green',
                        borderColor: 'blue',
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [elemento, data]);

    return <canvas ref={chartRef} width="400" height="200"></canvas>;
}

export default RendimentosPorTempo;
