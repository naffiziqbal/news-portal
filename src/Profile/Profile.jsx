import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user.email
            }
        </div>
    );
};

export default Profile;
