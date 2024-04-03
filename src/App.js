import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <Routes>
          <Route path="/" element={<Content/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
