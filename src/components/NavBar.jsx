import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "./CartWidget";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar" style={{backgroundColor: "#c1e1dc", borderBottom: "1px solid"}}>
            <Link to="/" className= {logo} ><img src={logo} alt="logo" width={70} /> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className="menu_link" to="/"> Inicio</Link></Nav.Link>
                        <NavDropdown className="menu_link" title="Catalogo">
                            <NavDropdown.Item> <Link className="menu_link" to="/productos/pasteleria"> Pasteteria  </Link></NavDropdown.Item><NavDropdown.Divider />
                            <NavDropdown.Item> <Link className="menu_link" to="/productos/reposteria"> Reposteria  </Link></NavDropdown.Item><NavDropdown.Divider />   
                            <NavDropdown.Item> <Link className="menu_link" to="/productos/box"> Boxes  </Link></NavDropdown.Item> 
                        </NavDropdown>
                        <Nav.Link><Link className="menu_link" to="/contacto"> Contacto</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to={'/cart'}><CartWidget /> </Link>
        </Navbar>
      );
};






      

