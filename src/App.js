import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pai } from "./components/styled";
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/Login';
import BuscarProduto from './components/BuscarProduto';
import Footer from './components/Footer';
import CriarLogin from './components/CriarLogin';
import PaginaDeNavegacao from './components/PaginaDeNavegacao';
import RegistrarProduto from './components/RegistrarProduto';
import EnviarEmailRecupSenha from './components/EnviarEmailRecupSenha';
import TelaDeResetSenha from './components/TelaDeResetSenha';
import RegistraVenda from './components/RegistraVenda';
import PaginaDeMetricas from './components/PaginaDeMetricas';
import VerificaAutenticacao from './components/VerificaAutenticacao';

function App() {
  return (
    <Router>
      <Pai>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/buscarProduto" element={<BuscarProduto />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/criarLogin" element={<CriarLogin />} />
          <Route path="/PaginaDeNavegacao" element={
            <VerificaAutenticacao>
              <PaginaDeNavegacao />
            </VerificaAutenticacao>} />
          <Route path="/RegistrarProduto" element={
            <VerificaAutenticacao>
              <RegistrarProduto />
            </VerificaAutenticacao>} />
          <Route path="/EnviarEmailRecupSenha" element={<EnviarEmailRecupSenha />} />
          <Route path="/TelaDeResetSenha" element={<TelaDeResetSenha />} />
          <Route path="/RegistraVenda" element={
            <VerificaAutenticacao>
              <RegistraVenda />
            </VerificaAutenticacao>
          } />
          <Route path="/PaginaDeMetricas" element={
            <VerificaAutenticacao>
              <PaginaDeMetricas />
            </VerificaAutenticacao>
          } />

        </Routes>
        <Footer />
      </Pai>
    </Router>

  );
}

export default App;
