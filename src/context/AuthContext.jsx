import { createContext, useEffect, useState } from "react";
import { getUserEmail } from "../Pages/services/services";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProviderContext = ({children}) => {

    const navigate = useNavigate(); 
    const [ emailAddress, setEmailAddress ] = useState('');


    useEffect(() => {
        localStorage.setItem('emailAddress', emailAddress);
    }, [emailAddress]);

    useEffect (() => {
    const getMyUserEmail = async () => {
        try {
            const info = await getUserEmail({ emailAddress });
            setEmailAddress(info);
        } catch (error) {
            logOut();
        }
    }

    if(emailAddress) getMyUserEmail()

}, [ emailAddress ]);

    const logOut = () => {
        setEmailAddress('');
        navigate('/');
    }
    
    return (
        <AuthContext.Provider value={{ emailAddress }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProviderContext

