import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header () {
    return (
        <div>
            <Navbar class="navbar navbar-light" style={{backgroundColor: "lightgreen"}}>
            <Navbar.Brand href="#home" >PathGroup</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;