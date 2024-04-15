import React, { } from 'react';
import { DivFooter, DivLocal, DivContato, ContatoWhats, DivCnpj } from "./styled";
import { FaLocationDot, FaPhone, FaRegCopyright } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavLink,
} from 'reactstrap';

const anoAtual = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric'
});

function Footer(props) {

    return (
        <DivFooter id='contato'>
            <DivLocal>
                <p><FaLocationDot />  Rua do Pocinho, 214 <br/>Centro, Fortaleza-CE</p>
            </DivLocal>
            <DivCnpj>
                <p><FaRegCopyright /> {anoAtual}</p>
                <p>CNPJ: 000.000.000/0001-00</p>
            </DivCnpj>

            <DivContato>
                <p><FaPhone /> Telefone: (85) 3231-3883</p>
                <ContatoWhats href="https://wa.me/5585996842755" target="_blank" rel="noreferrer">
                    <p><IoLogoWhatsapp /> Whatsapp: (85) 99684-2755</p>
                </ContatoWhats>

            </DivContato>
        </DivFooter>
    );
}

export default Footer;