import React from 'react';
import logo from '../../images/logo.png';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';
import './Body.css';

const Body = () => {
    return (
        <div className='body-container'>
            <div className='main-section'>
                <div className='header'>
                    <img className='logo' src={logo} alt="" />
                    <h1>ALPHA-FITNESS-CLUB</h1>
                </div>
                <h2>Select today’s exercise</h2>
                <div>
                    <Posts></Posts>
                </div>
            </div>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};


export default Body;