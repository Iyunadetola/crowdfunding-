import './App.css';
import React , {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import GetStarted from './components/pages/GetStarted';
import Discover from './components/pages/Discover';
// import Pledge from './components/Pledge';



function App() {

  return (
    <div className="App">
      <BrowserRouter >
      
      <Routes>
      <Route  path='/' element={<Navbar />} />
        <Route  path='/' element={<Navbar />} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/getStarted' element={<GetStarted/>} />
        <Route  path='/discover' element={<Discover/>} />




      </Routes>
      </BrowserRouter>
      {/* <Pledge/> */}
    </div>
  );
}

export default App;
