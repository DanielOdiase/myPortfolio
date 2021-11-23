import React from 'react'
import "./About.css"
import Proj from "../../image/projimg.png"

export default function About() {
    return (
        
            <div className="a">
             <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src={Proj} alt="netflixcloneimage" className="a-img" />
                 </div>

             </div>


             <div className="a-right">
             <h1 className="a-title">
                 About Me
             </h1>
             <p className="a-sub">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis unde nisi numquam ab, dolores praesentium dolorem 
                  eos corporis consectetur dicta consequuntur itaque quibusdam 
                  libero blanditiis architecto saepe voluptatum, asperiores id!
             </p>
             <p className="a-descr">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quas provident culpa cumque fugit nostrum libero veritatis repellendus 
                  exercitationem. Repellendus consectetur error ducimus,
                  iste dolore corporis suscipit nemo odio laborum esse.
             </p>
             </div>
                
            </div>
        
    )
}
