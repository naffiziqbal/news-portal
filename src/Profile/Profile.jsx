import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.displayName ? user?.displayName :   user?.email
            }
        </div>
    );
};

export default Profile;
