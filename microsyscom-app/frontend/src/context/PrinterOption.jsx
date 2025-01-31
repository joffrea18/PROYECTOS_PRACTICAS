import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Modal, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'react-multi-carousel/lib/styles.css';

const PrinterOption = () => {
    const storedPoints = JSON.parse(localStorage.getItem('points')) || {}; 

    // Función para sumar todos los puntos
    const puntitos = () => Object.values(storedPoints).reduce((acc, val) => acc + val, 0);

    const [open, setOpen] = useState(false); 

    const generatePDF = () => {
        const input = document.getElementById('pdf-content'); 
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            // Establecer fondo del pdf
            pdf.setFillColor(135, 206, 250);
            pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F'); 

            // Títulos y valores
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);

            pdf.text('Business Analysis Result', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

            let yOffset = 40; // Posición inicial de los textos
            Object.keys(storedPoints).forEach((key) => {
                pdf.text(`${key.replace('_', ' ')}: ${storedPoints[key]}`, 20, yOffset);
                yOffset += 10; // Espaciado entre líneas
            });

            pdf.text(`Total Points: ${puntitos()}`, 20, yOffset);

            const imgWidth = 180; 
            pdf.addImage(imgData, 'PNG', 10, yOffset + 10, imgWidth, (canvas.height * imgWidth) / canvas.width);
            pdf.save('report_microsyscom.pdf'); 
        });

        setOpen(false);
    };

    return (
        <div>
        <section id='pdf-content' className='points-num' style={{ textAlign: 'center' }}>
        <h1>BUSINESS ANALYSIS RESULTS</h1>
        <Carousel 
            responsive={{
                superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
                desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
                tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
            }}
        >
        </Carousel> 
        </section>
        <p className='total-points'>
        TOTAL POINTS
        <br /> {puntitos()}
        </p>
        <br />
        <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            id='generatepdf-button'
            style={{ boxShadow: '10px 5px 5px black' }}
        >
        Generate PDF
        </Button>
        {/* <Link style={{ textDecoration: 'none' }} to='/'>
        <h1>RETURN HOME & EXIT</h1>
        </Link> */}
        <Modal
            open={open}
            onClose={() => setOpen(false)}
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
            onClick={generatePDF}
            style={{ marginTop: '20px' }}
        >
        Yes, Generate PDF
        </Button>
        <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
            style={{ marginTop: '10px' }}
        >
        Cancel
        </Button>
        </div>
        </Modal>
        </div>
    );
};

export default PrinterOption;
