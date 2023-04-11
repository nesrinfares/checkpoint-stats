

import React , { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from './component/Me';
import Publ from './component/Publ';
import Nou from './component/Nou';


function App() {
  return (
    <div className="App">
    <Nou/>  
     <Me/>
     <Publ/>
    </div>
  );
}

export default App;
