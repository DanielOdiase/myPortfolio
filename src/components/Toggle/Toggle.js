import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import "./Toggle.css"

function Toggle() {
    const theme =useContext(ThemeContext)
  
    function handleClick(){
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="toggle-button">
            <div className="t-button" onClick={handleClick } style={{left:theme.state.darkMode?"0":"25px"}}>

            </div>
            
        </div>
    )
}

export default Toggle
