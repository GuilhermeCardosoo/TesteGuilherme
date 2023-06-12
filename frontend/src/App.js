import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Layout/Home/'
import NovoCarro from './Layout/FormNovoCarro/'
import InfoCarro from './Layout/infoCarro/'

function App() {
  return (
    <main>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/addCarro" element={<NovoCarro/>}/>
          <Route path="/infoCarro" element={<InfoCarro/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
