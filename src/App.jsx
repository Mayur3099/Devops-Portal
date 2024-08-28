import React from 'react';
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Micro, Monolith, Deploy } from './Pages';
import { Navbar } from './Components';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='microservices' element={<Micro />} />
            <Route path='monoliths' element={<Monolith />} />
            <Route path='deploy' element={<Deploy />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
