
import { Container, Nav, Navbar, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../assets/img/logo.png';
import './css/Navigation.css';
import {  useState } from "react";

function Navigation() {
    const [expended, setExpended] = useState(false);
   
    const handleNavLinkClick = () => {
        setExpended(false);
    }
    return (
        <Navbar className="navbar shadow" expand="lg" fixed="top" bg="light" expanded={expended} onToggle={()=>setExpended(!expended)}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    {/* <img src={Logo} alt="logo" width={150} height={80}/> */}
                    Yugan Foods
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to='/subscription'>Subscription</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/login">Login/Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;