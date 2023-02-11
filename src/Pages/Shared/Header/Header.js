import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}> Mannat Tour Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                        <Nav.Link as={Link} to={"/aboutservices"}>About Services</Nav.Link>

                    </Nav>
                    <Nav>

                        {
                            user?.uid ?
                                <>

                                    <Nav.Link className='me-2' onClick={handleLogout}>Logout</Nav.Link>

                                    <Nav.Link className='me-2' as={Link} to={"/myReviews"}>My Reviews</Nav.Link>
                                    <Nav.Link className='me-2' as={Link} to={"/addService"}>Add Service</Nav.Link>
                                </>
                                :
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;