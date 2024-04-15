import React, { useState, useEffect } from 'react';
import {HeaderDiv, NavItem} from "./styled";
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        if (location.hash) {
          let elem = document.getElementById(location.hash.slice(1));
          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }, [location,]);

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
                            <NavLink href="#produtos">Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contato">
                                Contato
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Sobre nós
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login">
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