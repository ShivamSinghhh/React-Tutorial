import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ToDo} from "./components/ToDo"

function App() {
  
  return (
    <div className="App">
    <h2>ToDo Management</h2>
    <ToDo/>
    
    </div>
  );
}


export default App;
