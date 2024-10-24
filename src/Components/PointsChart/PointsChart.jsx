import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip } from 'chart.js';
import { usePoints } from '../../context/PointsContext';

// Se deben registrar las escalas del Chart
    // dado que la versión es superior a v3
Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip);

const PointsChart = () => {
    const { points } = usePoints();

    const data = {
        labels: ['Router', 'Firewall', 'Switch'],
        datasets: [
            {
                label: 'Total Points',
                data: [points.router, points.firewall, points.switch],
                backgroundColor: ['rgba(0, 160, 255, 1)'],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                // ticks: {
                //     color: 'blue', // Cambia 'blue' al color deseado
                // },
            },
            x: {
                ticks: {
                    color: 'red', // Cambia 'red' al color deseado
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'green', // Cambia 'green' al color deseado
                },
            },
            title: {
                display: true,
                text: 'Points Distribution',
                color: 'black', // Cambia 'black' al color deseado
            },
        },
    };

    return (
        <div>
            {/* <h2>Points Distribution</h2> */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default PointsChart;
