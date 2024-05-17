import React, { useState, useEffect } from 'react';
import { HeaderDiv, NavItem, Logout, LogoutDiv, DivLogada, DivNotifi, } from "./styled";
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
} from 'reactstrap';
import logo from "../images/logo.png";
import { SlLogout } from "react-icons/sl";
import Notification from './CountNofitication';
//import { IoNotifications } from "react-icons/io5";


function Header(props) {
    const [collapsed, setCollapsed] = useState(true);
    const [logout, setLogout] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/Login');
    };

    const token = localStorage.getItem('token');
    const loginLink = token ? '/PaginaDeNavegacao' : '/Login';

    useEffect(() => {
        if (token) {
            setLogout(true);
        } else {
            setLogout(false);
        }
    }, [token]);



    return (
        <HeaderDiv id='maior'>
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
                            <NavLink href={loginLink}>
                                Área de Login (Funcionários)
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            {logout &&
                <DivLogada>
                    <DivNotifi>
                        <Notification count={1} />
                    </DivNotifi>
                    <LogoutDiv id='logout' onClick={handleLogout}>
                        <SlLogout size="30px" />
                        <Logout>Logout</Logout>
                    </LogoutDiv>
                </DivLogada>
            }
        </HeaderDiv>
    );
}

export default Header;