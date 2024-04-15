import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pai } from "./components/styled";
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/Login';
import BuscarProduto from './components/BuscarProduto';
import Footer from './components/Footer';
import CriarLogin from './components/CriarLogin';

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
        </Routes>
        <Footer />
      </Pai>
    </Router>

  );
}

export default App;
