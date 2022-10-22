import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            This IS Log in Page
        </div>
    );
};

export default Login;
