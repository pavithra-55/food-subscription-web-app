
import { Button, Container, Nav, Navbar, } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../assets/img/logo-yf.png';
import './css/Navigation.css';
import {  useState } from "react";

function Navigation() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    const [expended, setExpended] = useState(false);
   
    const handleNavLinkClick = () => {
        setExpended(false);
    }
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login")
    }
    return (
        <Navbar className="navbar shadow" expand="lg" fixed="top" bg="light" expanded={expended} onToggle={()=>setExpended(!expended)}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt="logo" width={100} height={70}/>
                    {/* Yugan Foods */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to='/subscription'>Subscription</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/contact">Contact</Nav.Link>
                        {isLoggedIn && (
                            <Nav.Link as={NavLink} to="/candidate">
                                Candidate
                            </Nav.Link>
                        )}
                        
                        {!isLoggedIn ?(
                            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/login">Login</Nav.Link>
                        ) : (
                                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;