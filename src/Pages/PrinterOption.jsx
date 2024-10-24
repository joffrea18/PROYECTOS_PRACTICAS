import React from 'react';
import '../Pages/PagesCSS/Pages.css';
import { usePoints } from '../context/PointsContext';
import PointsChart from '../Components/PointsChart/PointsChart';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; // Asegúrate de usar el botón de Material-UI

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PrinterOption = () => {

    const { points } = usePoints();

    // Suma de puntos
    const totalPoints = points.router
        + points.firewall
        + points.switch;

        const generatePDF = () => {
            const input = document.getElementById('pdf-content'); // Div que deseas convertir en PDF
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 190; // Ancho de la imagen en el PDF
                const pageWidth = pdf.internal.pageSize.getWidth();
                const x = (pageWidth - imgWidth) / 2; // Centrar horizontalmente
                pdf.addImage(imgData, 'PNG',  x, 10, imgWidth, (canvas.height * imgWidth) / canvas.width);
                pdf.save('business-report-microsyscom.pdf'); // Nombre del archivo PDF
            });
        };

    return (
        <div>
            <section
                id='pdf-content'
                className='points-num'
                style={{ textAlign: 'center' }}>
                <br />
                <Navbar/>
                <h1>
                    TOTAL ROUTER POINTS: {points.router}
                </h1>
                <br />
                <h1>
                    TOTAL FIREWALL POINTS: {points.firewall}
                </h1>
                <br />
                <h1>
                    TOTAL SWITCH POINTS: {points.switch}
                </h1>
                <br />
                <br />
                <h1>
                    TOTAL POINTS: {totalPoints}
                </h1>
            <PointsChart />
            </section>
            <Button
                variant="contained"
                color="primary"
                onClick={generatePDF}>
                Generate PDF
            </Button>
            <Link
                style={{textDecoration : 'none' }}
                to='/' >
                   <h1>
                    HOME
                   </h1>
                </Link>

        </div>
    );
}

export default PrinterOption;
