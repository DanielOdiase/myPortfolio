import React from 'react'
import "./intro.css"
import Me from "../../image/me.JPG"
 

const Intro = () => {
    return (
        <div className="i" id ="intro"> 
            <div className="i-left"> 
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My Name is</h2>
                <h1 className="i-name">Daniel Odiase</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Software Engineer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Mechanical Engineer</div>
                        <div className="i-title-item">Content-Creator</div>
                        <div className="i-title-item">Professional learner</div>
                    </div>
                </div>
               <div className="i-description">I'm a Jack of all trades Engineer with a Mechanical Engineering background 
                 and a coding passion.
               I love to learn,design and bring to life crazy and innovative ideas.
               </div>
               <a href="https://drive.google.com/file/d/1Wi4sgArkc88qXcJSUV9osjRx9zbY7svs/view"  className="resume"download>Download resume</a>
            </div>
           
            </div>
            <div className="i-right">
             
                <img src={Me} alt="" className="i-img"></img>
            
                 </div>
        
        </div>
    )
}

export default Intro
