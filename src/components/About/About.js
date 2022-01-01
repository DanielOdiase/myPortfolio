import React from 'react'
import "./About.css"
import AboutMe from "../../image/AboutMe.JPG"

export default function About() {
    return (
        
            <div className="a">
             <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src={AboutMe} alt="netflixcloneimage" className="a-img" />
                 </div>

             </div>


             <div className="a-right">
             <h1 className="a-title">
                 About Me
             </h1>
             <p className="a-sub">
             So About Me ... Im a well rounded Engineer,with a Major In Mechanical Engineering and Minor in Computer Science . 
             I  pride myself as a problem solver that uses available resoures to create solutions for existing problems.
             I love seeing my designs come to life both in the engineering world and in the tech world . 
             Ive been blessed with the opportunity of working as a project engineer, in which i was able to bring a lot of ideas /designs to life through the entire product life cycle.
             I've been involved in the design and development of various succesfull, consstruction projects, ecommerce websites and  web-apps.
             In my free time i love to create quality connections with friends , 
             learn new languages, workout, play basketball and learn more about myself and life.
             </p>
             </div>
                
            </div>
        
    )
}
