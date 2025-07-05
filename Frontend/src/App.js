import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Form from "./components/Form/Form.js"
import Display from "./components/Display/Display.js"
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Form />} />
        <Route path="/display" element={< Display />} />

      </Routes>
    </div>
  );
}

export default App;
