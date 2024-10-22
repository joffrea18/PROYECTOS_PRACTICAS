import { createContext, useEffect, useState } from "react";
import { getId } from "../Pages/services/services";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProviderContext = ({ children }) => {
 
    const [ id, setId ] = useState('');
    const [ businessA, setBusinessA ] = useState('');


    useEffect(() => {
        localStorage.setItem('id', id);
        // localStorage.setBusinessA('business', businessA);
    }, [id, businessA]);

    useEffect (() => {
    const getMyId = async () => {
        try {
            const info = await getId({ id, businessA });
            setId(info);
            setBusinessA(info);
        } catch (error) {
            return error;
        }
    }

    if( id ) getMyId()
}, [ id, businessA ]);

    
    return (
        <AuthContext.Provider value={{ id, businessA }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProviderContext

