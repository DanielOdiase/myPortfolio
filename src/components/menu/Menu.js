import React from 'react'
import "./Menu.css"


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
      <div className={"menu "+(menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#AboutMe">AboutMe</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
        
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    );
  }
  