import React from 'react';
import '../Pages/PagesCSS/Pages.css';
import { usePoints } from '../context/PointsContext';
import PointsChart from '../Components/PointsChart/PointsChart';
import { Link } from 'react-router-dom';
import { Button } from 'react-native-web';


const PrinterOption = () => {

    const { points } = usePoints();

    // Suma de puntos
    const totalPoints = points.router
        + points.firewall
        + points.switch;

    return (
        <div>
            <section
                className='points-num'>
                <br />
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
            </section>
            <section
                className='points-chart'>
                    <PointsChart />
            </section>
            <Link
                style={{textDecoration : 'none' }}
                to='/' >
                    <Button
                        variant='contained'
                        className='back-button' >
                        HOME
                    </Button>
                </Link>

        </div>
    );
}

export default PrinterOption;
