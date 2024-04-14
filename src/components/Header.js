import React, { useState } from 'react';
import {HeaderDiv, NavItem} from "./styled";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
} from 'reactstrap';
import logo from "../images/logo.png";


function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <HeaderDiv>
            <Navbar color="faded" light>
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={logo}
                        style={{
                            height: 80,
                            width: 120
                        }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Contato
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Sobre nós
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Área de Login (Funcionários)
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </HeaderDiv>
    );
}

export default Header;