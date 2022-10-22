import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const SignUp = () => {
    const {user } = useContext(AuthContext);
    console.log(user);
    
    return (
        <div>
            This  Is Sign Up Page
        </div>
    );
};

export default SignUp;
