import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Pai} from "./components/styled";
import Header from './components/Header';
// import Content from './components/Content';
// import RegistrarProduto from './components/RegistrarProduto';
import BuscarProduto from './components/BuscarProduto';

function App() {
  return (
    <Router>
      <Pai>
        <Header />
        <Routes>
          <Route path="/" element={<BuscarProduto/>} />

        </Routes>
      </Pai>
    </Router>

  );
}

export default App;
