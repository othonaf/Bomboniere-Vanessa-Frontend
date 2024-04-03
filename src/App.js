import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Content from './components/Content';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <Routes>
          <Route path="/" element={<IndexPage/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
