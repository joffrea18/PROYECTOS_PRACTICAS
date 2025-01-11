import React, { createContext, useContext, useState } from 'react';

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState({
        router: 0,
        firewall: 0,
        switch: 0,
        accespoint: 0,
        xdr: 0,
    });
    const [ id, setId ] = useState('');
    const [ businessA, setBusinessA ] = useState('');
    
    return (
        <PointsContext.Provider value={
            { points, setPoints,
            id, setId,
            businessA, setBusinessA }}>
        {children}
        </PointsContext.Provider>
    );
};

export const usePoints = () => {
    return useContext(PointsContext);
};

// Estas llaves se pueden eliminar si sólo
// se pasa un return