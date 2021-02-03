import React from 'react';
// import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import "./styles.css"
import notLoggedInAvatar from "../../assets/notLoggedInAvatarPic.jpg";
import placeholderLogo from "../../assets/nesController.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Text from 'react-bootstrap/Text';
// import Brand from 'react-bootstrap/NavbarBrand';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();

    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={placeholderLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top logoImage"
                    />{' '}
                    Retro Game Collector
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/collection">Collection</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <Nav inline>
                    {!isAuthenticated && (
                        <span>
                        <Button color="primary" variant="light" onClick={() => loginWithRedirect({})}>Log In</Button>
                        <img alt="genericAvatar" className="notLoggedInPicture" src={notLoggedInAvatar} />
                        </span>
                    )}

                    {isAuthenticated && <Button className='logOutButton' color="primary" variant="light" onClick={() => logout()}>Log Out</Button>}

                    {isAuthenticated && (
                        <span className='loggedInNavAvatar'>
                            <Navbar.Text className='welcomeName'>Welcome { user.given_name } </Navbar.Text>
                            <img alt="profilePicture" className="profilePicture justify-content-end" src={user.picture} />
                            

                        </span>
                        
                    )}
                    {isAuthenticated}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        // <div className="navBar">
        //     <Navbar bg="dark" variant="dark">
        //         <Navbar.Brand href="/">
        //             <img
        //                 alt=""
        //                 src={placeholderLogo}
        //                 width="30"
        //                 height="30"
        //                 className="d-inline-block align-top"
        //             />{' '}
        //         Retro Game Collector
        //         </Navbar.Brand>
        //     {/* <div className="mainLogo" >
        //         <h1>Retro Collector</h1>
        //     </div> */}
        //     <Nav className="mr-auto">

            
        //     {!isAuthenticated && (
        //         <span>
        //         <button color="primary" onClick={() => loginWithRedirect({})}>Log In</button>
        //         <img alt="genericAvatar" className="notLoggedInPicture" src={notLoggedInAvatar} />
        //         </span>
        //     )}

        //     {isAuthenticated && <button color="primary" onClick={() => logout()}>Log Out</button>}

        //     {isAuthenticated && (
        //         <span>
        //             <Link to='/'>Home</Link>
        //             <span>   </span>
        //             <Link to='profile'>Profile</Link>
        //             <span>  </span>
        //             <Link to='collection'>Collection</Link>
        //             <img alt="profilePicture" className="profilePicture justify-content-end" src={user.picture} />
        //             <h2>Welcome { user.given_name } </h2>

        //         </span>
                
        //     )}
        //     {isAuthenticated}
        //     </Nav>
        //     </Navbar>
            
        // </div>
    )
}

export default NavBar;