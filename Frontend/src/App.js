import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Form from "./components/Form/Form.js"
import Display from "./components/Display/Display.js"
// import ChatApp from './components/chat';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={< Form />} />
        <Route path="/display" element={< Display />} />

        {/* <Route path='/chat' element={<ChatApp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
