import React from 'react';
import { useAuth0 } from '../react-auth0-spa';


const Profile = () => {
    const { loading, user } = useAuth0();

    if(loading || !user) {
        return <div>Loading...</div>
    }
    console.log(user)
    return (
        <>
        <img src={user.picture} alt="Profile Picture" />
        
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
        </>
    );
};

export default Profile;