import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import "./styles.css"
import notLoggedInAvatar from "../../assets/notLoggedInAvatarPic.jpg";
import placeholderLogo from "../../assets/nesController.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Brand from 'react-bootstrap/NavbarBrand';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();

    return(
        
        <div className="navBar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={placeholderLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                Retro Game Collector
                </Navbar.Brand>
            {/* <div className="mainLogo" >
                <h1>Retro Collector</h1>
            </div> */}
            <Nav className="mr-auto">

            
            {!isAuthenticated && (
                <span>
                <button color="primary" onClick={() => loginWithRedirect({})}>Log In</button>
                <img alt="genericAvatar" className="notLoggedInPicture" src={notLoggedInAvatar} />
                </span>
            )}

            {isAuthenticated && <button color="primary" onClick={() => logout()}>Log Out</button>}

            {isAuthenticated && (
                <span>
                    <Link to='/'>Home</Link>
                    <span>   </span>
                    <Link to='profile'>Profile</Link>
                    <span>  </span>
                    <Link to='collection'>Collection</Link>
                    <img alt="profilePicture" className="profilePicture" src={user.picture} />
                    <h2>Welcome { user.given_name } </h2>

                </span>
                
            )}
            {isAuthenticated}
            </Nav>
            </Navbar>
            
        </div>
    )
}

export default NavBar;