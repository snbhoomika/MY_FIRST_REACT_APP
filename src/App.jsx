
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Tables from './components/Tables';
import Welcome1 from './components/Welcome1';
import Login from './components/login';
import Concepts from './components/Concepts';
import Tables1 from './components/Tables1';
import NotFound1 from './components/NotFound1';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Welcome1 />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tables" element={<Tables />} />
      <Route path="/Tables1" element={<Tables1 />} />
      <Route path="/Concepts" element={<Concepts />} />


      <Route path="*" element={<NotFound1 />} />
    </Routes>


  );
}

export default App;
