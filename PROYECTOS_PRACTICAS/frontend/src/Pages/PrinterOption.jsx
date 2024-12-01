import React, { useState } from 'react';
import './PagesCSS/Pages.css';
import { usePoints } from '../context/PointsContext';
import PointsChart from '../Components/PointsChart/PointsChart';
import { Link } from 'react-router-dom';
import { Button, Modal, Typography } from '@mui/material'; // Importanción de la librería @mui/material
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PrinterOption = () => {

const business = localStorage.getItem('business');
const { points } = usePoints();
const [open, setOpen] = useState(false); // Estado para controlar el modal

    // Suma de puntos
    const totalPoints = points.router
        + points.firewall
        + points.switch
        + points.accespoint
        +points.xdr;

const generatePDF = () => {
    const input = document.getElementById('pdf-content'); // Div que deseas convertir en PDF
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        // Establecer fondo del pdf
        pdf.setFillColor(135, 206, 250); // Cambia estos valores a RGB que desees
        pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F'); // Dibuja el fondo

        // Agregar títulos y valores antes de la imagen
        pdf.setFontSize(16);
        pdf.setTextColor(0, 0, 0); // Color de texto negro

        pdf.text('Business Analysis Result', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
        pdf.text(`Total Router Points: ${points.router}`, 20, 40);
        pdf.text(`Total Firewall Points: ${points.firewall}`, 20, 50);
        pdf.text(`Total Switch Points: ${points.switch}`, 20, 60);
        pdf.text(`Total AccesPoint Points: ${points.accespoint}`, 20, 70);
        pdf.text(`Total XDR Points: ${points.xdr}`, 30, 50);
        pdf.text(`Total Points: ${totalPoints}`, 20, 70);

        const imgWidth = 200; // Ancho de la imagen en el PDF
        const pageWidth = pdf.internal.pageSize.getWidth();
        const x = (pageWidth - imgWidth ) / 2; // Centrar horizontalmente

        // Agregar img al PDF
        pdf.addImage(imgData, 'PNG', x, 10, imgWidth, (canvas.height * imgWidth) / canvas.width);
        pdf.save('report_business_microsyscom.pdf'); // Nombre del archivo PDF
    });
    setOpen(false); // Cerrar el modal después de generar el PDF
};
const handleOpen = () => setOpen(true); // Abrir el modal
const handleClose = () => setOpen(false); // Cerrar el modal

    return (
        <div>
            <section
                id='pdf-content'
                className='points-num'
                style={{ textAlign: 'center' }}>
                {/* <Navbar/> */}
                <h2 className='business'>{business}</h2>
                <h1>BUSINESS ANALYSIS RESULT</h1>
                <PointsChart points= {points}/>
                <form
                    id='form-pointer'
                    action="">
                <h1>
                    ROUTER POINTS 
                    <br /> {points.router}
                </h1>
                <br />
                <h1>
                    FIREWALL POINTS
                    <br /> {points.firewall}
                </h1>
                <br />
                <h1>
                    SWITCH POINTS
                    <br /> {points.switch}
                </h1>
                <br />
                <h1>
                    ACCES POINTS
                    <br /> {points.accespoint}
                </h1>
                <br />
                <h1>
                    XDR POINTS
                    <br /> {points.xdr}
                </h1>
                <br />
                <p className='total-points'>
                    TOTAL POINTS
                    <br /> {totalPoints}
                </p>
            </form>
            </section>
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                id='generatepdf-button'
                style={{
                    boxShadow: '10px 5px 5px black'
                }}>
                Generate PDF
            </Button>
            <Link
                style={{textDecoration : 'none' }}
                to='/' >
                   <h1>
                    HOME
                   </h1>
                </Link>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    outline: 'none',
                }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Generate PDF
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to generate the PDF report?
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={generatePDF} // Generar PDF al hacer clic
                        style={{ marginTop: '20px' }}>
                        Yes, Generate PDF
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                        style={{ marginTop: '10px' }}>
                        Cancel
                    </Button>
                </div>
            </Modal>

        </div>
    );
}

export default PrinterOption;
