import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';

import Home from './pages/Home';
import Intranet from './pages/Intranet';
import Header from './pages/Header';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    
    <ToastContainer/>
    
       <Routes>
        
        <Route path="/"element = {<Register/>}  exact/>
       <Route path="/"element = {<Home/>}  exact/>
       <Route path="/"element = {<Intranet/>}  />
       
       
        </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
