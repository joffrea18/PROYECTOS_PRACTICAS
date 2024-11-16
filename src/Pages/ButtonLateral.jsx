import React from 'react';
import { usePoints } from '../context/PointsContext';

const ButtonLateral = () => {

const { points } = usePoints();
const totalPoints = points.router
    + points.firewall
    + points.switch
    + points.accespoint
    + points.xdr;

    return (
        <div style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderLeft: "1px solid #ddd",
          }}>
            <h2>Barra Lateral</h2>
            <p>
                <strong>Firewall</strong>
                    {points.firewall
                    || "No proporcionado"}
            </p>
            
            <p>
                <strong>Switch</strong>
                    {points.switch
                    || "No proporcionado"}
            </p>

            <p>
                <strong>Acces Point</strong>
                {points.accespoint
                || "No proporcionado"}
            </p>

            <p>
                <strong>Xdr</strong>
                {points.xdr
                || "No proporcionado"}
            </p>

          </div>
    );
}

export default ButtonLateral;
