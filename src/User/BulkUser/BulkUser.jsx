import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const BulkUser = () => {
    const { user} = useContext(AuthContext)
    return (
        <div>
            <p className='mx-2'>User</p>
        </div>
    );
};

export default BulkUser;
