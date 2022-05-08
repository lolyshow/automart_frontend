import React from 'react';
import CreateCar from './pages/CreateCar';
import Home from './pages/Home';
import ManageCars from './pages/ManageCars';
function App() {
  return (
    <div className="">
      <Home/>
      <CreateCar/>
      <ManageCars/>
    </div>
  );
}

export default App;
