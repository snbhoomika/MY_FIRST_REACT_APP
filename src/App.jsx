
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Tables from './components/Tables';
import Welcome1 from './components/Welcome1';
import Login from './components/login';
import NotFound1 from './components/NotFound1'



function App() {
  return (

    <Routes>
      <Route path="/" element={<Welcome1 />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tables" element={<Tables />} />


      <Route path="*" element={<NotFound1 />} />
    </Routes>


  );
}

export default App;
