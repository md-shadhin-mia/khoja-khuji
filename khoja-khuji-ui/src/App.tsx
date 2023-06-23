import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hello from './Hello'
import ModuleRegister from './core/RegisterModule'

const register = ModuleRegister.getInstance();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Hello/>} />
          {register.getModulesRoutes()}
        </Routes>
    </BrowserRouter>
  )
}

export default App
