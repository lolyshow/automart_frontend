import React from 'react';
import Navbar from './components/includes/Navbar';
import CreateCar from './pages/CreateCar';
import Home from './pages/Home';
import ManageCars from './pages/ManageCars';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  return (
    
    <Router>
    <div className="">
      <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
           
          <Route path = "/createCar" element={<CreateCar/>}/>
            
          <Route path = "/manageCars" element={<ManageCars/>}/>
            
          
        </Routes>
      
      
    </div>
    </Router>
      
    
  );
}

export default App;
