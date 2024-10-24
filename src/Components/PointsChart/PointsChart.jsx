import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { usePoints } from '../../context/PointsContext';

// Se deben registrar las escalas del Chart
    // dado que la versión es superior a v3
Chart.register(ArcElement, Title, Tooltip, Legend);

const PointsChart = () => {
    const { points } = usePoints();

    const data = {
        labels: ['Router', 'Firewall', 'Switch'],
        datasets: [
            {
                label: 'Total Points',
                data: [points.router, points.firewall, points.switch],
                backgroundColor: [
                    'rgba(0, 160, 100, 1)', // Color para Router
                    'rgba(255, 202, 252, 1)', // Color para Firewall
                    'rgba(0, 123, 255, 1)', // Color para Switch
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
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
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default PointsChart;
