import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ModuleRegister from './core/RegisterModule.tsx';
import "./Modules/register-module.tsx"
const register = ModuleRegister.getInstance();
if(!register){
  console.error('Module Registation failure!!');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
