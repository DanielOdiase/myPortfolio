import React from 'react'
import "./About.css"
import AboutMe from "../../image/AboutMe.JPG"

export default function About() {
    return (
        <div className='a-container'> 
            <h1 className="a-title">
                     My Skills
                     </h1>
            <div className="a" id="AboutMe">
             <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src={AboutMe} alt="profileimage" className="a-img" />
                 </div>

             </div>
             <div className="a-right">

            <div className='a-tagContainer'> 
                <ul className='a-tag'> 
                    <li className='tags'>
                        JavaScript
                    </li>
                    <li className='tags'>
                        TypeScript
                    </li>
                    <li className='tags'>
                        Python
                    </li>
                    <li className='tags'>
                        React
                    </li>
                    <li className='tags'>
                        Node Js
                    </li>
                    <li className='tags'>
                        HTML
                    </li>
                    <li className='tags'>
                        CSS
                    </li>
                    <li className='tags'>
                        Gatsby
                    </li>
                    <li className='tags'>
                        Next Js
                    </li>
                    <li className='tags'>
                        MongoDB
                    </li>
                    <li className='tags'>
                        Express
                    </li>
                    <li className='tags'>
                        GraphQL
                    </li>
                    <li className='tags'>
                        Firebase
                    </li>
                    <li className='tags'>
                        Shopify
                    </li>
                    <li className='tags'>
                        PostgreSQL
                    </li>
                </ul>
            </div>
            <div className='a-sub'> <p>So About Me ... Im a well rounded Engineer,with a Major In Mechanical Engineering and Minor in Computer Science . 
             I  pride myself as a problem solver who uses available resoures to create solutions for existing problems.
             I love seeing my designs come to life in the tech world . 
             Ive been blessed with the opportunity of working as a project manager, in which I was able to bring many ideas and designs to life through the entire product life cycle.
             I've been involved in the design and development of various succesfull, construction projects, ecommerce websites and  web-apps.
             In my free time I love to create quality connections with friends , 
             learn new languages, workout, play basketball and learn more about myself and life.
             </p> </div>
             </div>
                
            </div>
            </div>
        
    )
}
