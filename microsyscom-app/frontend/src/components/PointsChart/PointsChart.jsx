import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// import { usePoints } from '../../context/PointsContext';

// Se deben registrar las escalas del Chart
    // dado que la versión es superior a v3
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const PointsChart = ({ points }) => {
        const data = {
            labels: ['Router', 'Firewall', 'Switch', 'AccesPoint', 'XDR'],
            datasets: [
                {
                    label: 'Total Points',
                    data: [points.router
                        , points.firewall
                        , points.switch
                        , points.accespoint
                        , points.xdr],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)', // Color oscuro
                        'rgba(54, 162, 235, 1)', // Color oscuro
                        'rgba(75, 192, 192, 1)', // Color oscuro
                        'rgba(159, 90, 253, 1)',
                        'rgba(108, 59, 42, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(159, 90, 253, 1)',
                        'rgba(108, 59, 42, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
    
        const options = {
            indexAxis: 'y', // Cambiar a barra horizontal
            elements: {
                bar: {
                    borderWidth: 1,
                },
            },
            plugins: {
                legend: {
                    display: true, // Mostrar leyenda
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false, // Ocultar líneas de fondo
                    },
                },
                y: {
                    ticks: {
                        display: false, // Ocultar etiquetas del eje Y
                    },
                    grid: {
                        display: false, // Ocultar líneas de fondo
                    },
                },
            },
        };

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Altura del viewport
            width: '100%',
        }}>
            {/* <h2>Points Distribution</h2> */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default PointsChart;
