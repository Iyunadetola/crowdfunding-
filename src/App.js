import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Pledge from './components/Pledge';
import About from './components/pages/About';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route  path='/pledge' element={<Pledge />} />
        <Route  path='about' element={<About/>} />



      </Routes>
    
    </div>
  );
}

export default App;
