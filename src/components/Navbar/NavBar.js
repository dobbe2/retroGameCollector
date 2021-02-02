import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import "./styles.css"
import notLoggedInAvatar from "../../assets/notLoggedInAvatarPic.jpg";
import { Button, Avatar } from '@material-ui/core';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();

    return(
        <div className="navBar">
            <div className="mainLogo" >
                <h1>Retro Collector</h1>
            </div>
            {!isAuthenticated && (
                <span>
                <Button color="primary" onClick={() => loginWithRedirect({})}>Log In</Button>
                <Avatar alt="genericAvatar" className="notLoggedInPicture" src={notLoggedInAvatar} />
                </span>
            )}

            {isAuthenticated && <Button color="primary" onClick={() => logout()}>Log Out</Button>}

            {isAuthenticated && (
                <span>
                    <Link to='/'>Home</Link>
                    <span>   </span>
                    <Link to='profile'>Profile</Link>
                    <span>  </span>
                    <Link to='collection'>Collection</Link>
                    <Avatar alt="profilePicture" className="profilePicture" src={user.picture} />
                    <h2>Welcome { user.given_name } </h2>

                </span>
                
            )}
            {isAuthenticated}
            
        </div>
    )
}

export default NavBar;