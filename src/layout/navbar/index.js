import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../logo.svg';
import './index.css';

export default () => (
    <Navbar light expand="md">
        <NavbarBrand href="/"><img src={logo} className="logo" alt="logo" /></NavbarBrand>
        <Nav className="ml-md-auto d-md-flex pr-4" navbar>
            <NavItem>
                <NavLink href="/checkout/step-2"><div className="items">6</div> Items</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)