import React from 'react'
import "./Portfolio.css"
import CheckListApp from "../../image/Checklistapp.png"
import Expensetrackr from "../../image/ExpenseTrackr.png"
import collaboardImg from '../../image/collaboard.png'



export default function Portfolio() {

    return (
        <div className="portfolio" id="portfolio">
            <h1 style={{ backgroundColor: "inherit" }}>Projects </h1>
            <div className='container'>
                <div className='p-left'>
                    <h3 className='p-text'> FULL STACK DEVELOPER </h3>
                    <h2 className='p-name'> Task Managment App </h2>
                    <div className='p-tagContainer'>
                        <ul className='p-tag'>
                            <li className='p-tags'>
                                ReactJs
                            </li>
                            <li className='p-tags'>
                                Firesbase-Authentication
                            </li>
                            <li className='p-tags'>
                                CSS
                            </li>
                            <li className='p-tags'>
                                Github
                            </li>
                            <li className='p-tags'>
                                Date-Calender Picker
                            </li>
                            <li className='p-tags'>
                                Material-UI
                            </li>
                            <li className='p-tags'>
                                React Router
                            </li>
                            <li className='p-tags'>
                                Firebase Storage
                            </li>
                            <li className='p-tags'>
                                Firebase
                            </li>
                            <li className='p-tags'>
                                Firesbase-Hosting
                            </li>
                            <li className='p-tags'>
                                Figma
                            </li>
                        </ul>
                        <p className='p-description'>Working as a project manager ,
                            I noticed I needed some sort of Task Management Platform to keep track of my daily estimates and projects .
                            As a bonus I wanted to included some of my interest like the top 10 crypto prices and NBA scores to make the app a bit interesting.
                            Which made me create this CRUD task management app. App includes User-Auth,Creating Tasks, Updating Task Stage, Deleting Task Stage, and
                            personalized User profile page.
                        </p>
                        <button className="p-button" >
                            <a href="https://checklistapp-2af94.web.app/" className='p-button-ref'><span className='p-span'>View Project!</span></a>
                        </button>
                    </div>
                </div>
                <div className='p-right'>
                    <a href="https://checklistapp-2af94.web.app/" target="_blank" rel="noreferrer" className="item"><img src={CheckListApp} alt="" className="netimg"></img></a>
                </div>
            </div>
            <div className='container'>
                <div className='p-left'>
                    <h3 className='p-text'> FULL STACK DEVELOPER </h3>
                    <h2 className='p-name'> Expense TrackR </h2>
                    <div className='p-tagContainer'>
                        <ul className='p-tag'>
                            <li className='p-tags'>
                                ReactJs
                            </li>
                            <li className='p-tags'>
                                MongoDB
                            </li>
                            <li className='p-tags'>
                                CSS
                            </li>
                            <li className='p-tags'>
                                Github
                            </li>
                            <li className='p-tags'>
                                ExpressJs
                            </li>
                            <li className='p-tags'>
                                Material-UI
                            </li>
                            <li className='p-tags'>
                                NodeJs
                            </li>
                            <li className='p-tags'>
                                Figma
                            </li>
                            <li className='p-tags'>
                                Speechly Voice Assistance
                            </li>

                        </ul>
                        <p className='p-description'>Knowing how important it is to keep an accurate record of expenses but also how tedious it is typing/writing down every single expense,
                            I decided to embark on creating a voice assisted Expense-Tracker.
                        </p>
                        <button className="p-button">
                            <a href="https://radiant-fjord-58533.herokuapp.com/" className='p-button-ref'><span className='p-span'>View Project!</span></a>
                        </button>
                    </div>
                </div>
                <div className='p-right'>
                    <a href="https://radiant-fjord-58533.herokuapp.com/"
                        target="_blank" rel="noreferrer" className="item">
                        <img src={Expensetrackr} alt="" className="netimg" />
                    </a>
                </div>
            </div>
            {/* Collaboard Project */}
            <div className='container'>
                <div className='p-left'>
                    <h3 className='p-text'> FULL STACK DEVELOPER </h3>
                    <h2 className='p-name'> Collaboard </h2>
                    <div className='p-tagContainer'>
                        <ul className='p-tag'>
                            <li className='p-tags'>Next.js (TypeScript)</li>
                            <li className='p-tags'>Velt</li>
                            <li className='p-tags'>Liveblocks</li>
                            <li className='p-tags'>Tailwind CSS</li>
                            <li className='p-tags'>Vercel</li>
                            <li className='p-tags'>GitHub</li>
                        </ul>
                        <p className='p-description'>CollabBoard is a real-time collaborative note-taking app inspired by Google Docs and Figma. It allows multiple users to add notes, see who is online, and collaborate live. Built as a technical showcase for roles involving Solutions Engineering, SDK integration, and client-facing support. Features include real-time notes, user presence, comments, and more. <a href="https://github.com/DanielOdiase/collaboard" target="_blank" rel="noreferrer">[GitHub]</a> <a href="https://collaboard-rust.vercel.app/" target="_blank" rel="noreferrer">[Live Demo]</a></p>
                        <button className="p-button">
                            <a href="https://collaboard-rust.vercel.app/" className='p-button-ref'><span className='p-span'>View Project!</span></a>
                        </button>
                    </div>
                </div>
                <div className='p-right'>
                    <a href="https://collaboard-rust.vercel.app/" target="_blank" rel="noreferrer" className="item">
                        <img src={collaboardImg} alt="Collaboard Screenshot" className="netimg" />
                    </a>
                </div>
            </div>
            {/* End Collaboard Project */}




        </div>
    );
}