import React from 'react'
import "./Topbar.css"


export default function Topbar(props) {
    return (
      <div className={"topbar " + (props.menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              Daniel Odiase
            </a>
            
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }