import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextFrom from './Components/TextFrom';
import About from './Components/About';
// import React from 'react'
import React,{useState} from 'react'
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import About from './Components/About';


function App() {
  const [mode,setMode]=useState('light')  
  const toggle=()=>{
  if(mode==='light')
  {
  setMode('dark');
  document.body.style.backgroundColor = 'grey'
  }
  else if(mode==='dark')
  {
    setMode('light');
  document.body.style.backgroundColor = 'white'
  }
}
  return (
    <>
    <Router>
    <>

<NavBar title="TextUtil2" mode={mode} toggle={toggle} />

<Switch> 
          <Route exact path="/" >
          <TextFrom  mode={mode} />
          </Route>
          <Route exact path="/about" >
            <About key={1234} />
          </Route>
        </Switch>
        </>
        </Router>
        </>
   
  );
}

export default App;
