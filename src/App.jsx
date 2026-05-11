import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Form from './pages/Form'
import Summary from './pages/Summary'
import History from './pages/History'

function App() {


  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/form' element={<Form />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/history' element={<History />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
