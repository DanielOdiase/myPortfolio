import React from 'react'
import "./Portfolio.css"
import CheckListApp from "../../image/Checklistapp.png"
import Expensetrackr from "../../image/ExpenseTrackr.png"
import Portimg from "../../image/PortImg.png"
//import PortfolioList from '../portfolioList/PortfolioList';
//import { useState,useEffect } from 'react';

//import {
 // featuredPortfolio,
  //webPortfolio,
 // mobilePortfolio,
 // designPortfolio,
  //contentPortfolio,
//} from "../../data";

export default function Portfolio() {
//const [selected,setSelected]= useState("featured")
//const [data,setData]=useState([])
//const list = [
 //{
          //id: "featured",
         // title: "Featured",
        //},
        //{
         // id: "web",
         // title: "Web App",
       // },
        //{
         // id: "mobile",
         // title: "Mobile App",
        //},
       // {
        //  id: "design",
        //  title: "Design",
       // },
       // {
        //  id: "content",
        //  title: "Content",
       // },
     // ];

      // To implement as scope of Projects increase
   // useEffect(() => {
       // switch(selected){
       //  case "featured":
         //  setData(featuredPortfolio);
          // break;
          // case "web":
          //  setData(webPortfolio);
           // break;
           // case "mobile":
             // setData(mobilePortfolio);
              //break;
              //case "design":
               // setData(designPortfolio);
                //break;
               // case "content":
                 // setData(contentPortfolio);
                  //break;
                  //default:
                    //setData(featuredPortfolio);         
       // }
    //  }, [selected])
    return (
        <div className ="portfolio" id="portfolio">
            <h1 style={{backgroundColor:"inherit"}}>Portfolio </h1>
           {/*<ul className="port">
            {list.map((item)=> 
              <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>)} 
            </ul> */}
            <div className="container">
            <div className='first'>
            <a href = "https://checklistapp-2af94.web.app/" target="_blank" rel="noreferrer" className="item"><img src={CheckListApp} alt="" className="netimg"></img></a>
            <p className='pletters'>A CRUD Web app with User Auth that Utilizes React Js and Firebase to keep track of Personalized data</p>
            </div>
            <div className='first'>
              <a href = "https://radiant-fjord-58533.herokuapp.com/" 
                target="_blank" rel="noreferrer" className="item">
              <img src={Expensetrackr} alt="" className="netimg" /> 
              </a>
              <p className='pletters'>A Web app built with Reactjs,MongoDB,ExpressJs that utilizes Voice assistance to keep track of spending. </p>
            </div>
           <div className='first'>
         <a href = "https://danielodiase.github.io/myPortfolio/" 
               target="_blank" rel="noreferrer" className="item">
              <img src={Portimg} alt="" className="netimg" /> 
              </a><p className='pletters'>My Portfolio Webpage built with ReactJs,HTML,CSS and JavaScript. Get to know me a little.</p>
           </div>
                
                
                
         </div>
         </div>
    );
  }