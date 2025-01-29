import React, { createContext, useContext, useState } from 'react';
import PrinterOption from './PrinterOption';

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState({
        router: 0,
        firewall: 0,
        switch: 0,
        accesspoint: 0,
        xdr: 0,
    });
    const [ id, setId ] = useState('');
    const [ businessA, setBusinessA ] = useState('');
    
    return (
        <PointsContext.Provider value={{ points, setPoints, id, setId, businessA, setBusinessA }}>
        {children}
        <PrinterOption />
    </PointsContext.Provider>
    );
};

export const usePoints = () => {
    const context = useContext(PointsContext);
    if (!context) {
        throw new Error("usePoints must be used within a PointsProvider");
    }
    return context;
};
