import { createContext, useEffect, useState, useContext } from "react";
import { getId } from "../Pages/services/services";
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
    const [ id, setId ] = useState('');
    const [ businessA, setBusinessA ] = useState(
            localStorage.getItem('businessA'));


    useEffect(() => {
        localStorage.setItem('id', id);
        // localStorage.setBusinessA('business', businessA);
    }, [id]);

    useEffect(() => {
        localStorage.setItem('business', businessA);
        // localStorage.setBusinessA('business', businessA);
    }, [businessA]);

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
        
};

// export const useId = () => {
//     return useContext(AuthContext);
// };

export default AuthProvider;

