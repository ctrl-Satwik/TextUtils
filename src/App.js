// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
   BrowserRouter, 
   Route, 
   Routes 
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#004e53';
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <Routes>
            <Route exact path="/about" element={<About mode={mode} />}> 
            </Route> 
             <Route exact path="/" element={<TextForm heading= "Enter the text to analyze" mode={mode}/>}> 
            </Route>
          </Routes> 
          
          
  </div>
  </BrowserRouter>
  
    </>
  );
}

export default App;
