import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Content from './components/Content';
// import RegistrarProduto from './components/RegistrarProduto';
import BuscarProduto from './components/BuscarProduto';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <Routes>
          <Route path="/" element={<BuscarProduto/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
