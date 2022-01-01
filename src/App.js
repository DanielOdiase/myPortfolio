
import './App.css'
import Topbar from './components/topbar/Topbar.js';
import React from 'react';
import Intro from './components/intro/intro';
import Toggle from './components/Toggle/Toggle';
import Contacts from './components/contacts/Contacts'
import Portfolio from './components/portfoliof/Portfolio';
import {useState,useContext} from 'react'
import Menu from './components/menu/Menu';
import { ThemeContext } from './context';
import About from './components/About/About'

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  const theme= useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="app" style={{backgroundColor:darkMode?"#222":"white",color:darkMode?"white":"black"}}>
      <Toggle />
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      
      <Intro />
      <About />
      <Portfolio/>
      <Contacts />
    
      </div>
      
    </div>
  );
}

export default App;