import React from 'react';
import './Sidebar.css';
import image from '../../images/munna.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { addToLocalDb } from '../Utilities/Localdb';

const Sidebar = () => {
    const addToDb = (id) =>{
        addToLocalDb(id);
    }
    return (
        
        <div>
            <div className='profile'>
                <img src={image} alt="" />
                <div>
                    <h4>Mahadi Munna</h4>
                    <p><FontAwesomeIcon icon={faLocation} /><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='about'>
                <div className='info'>
                    <h4>68<small>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div className='info'>
                    <h4>5.5</h4>
                    <p>Height</p>
                </div>
                <div className='info'>
                    <h4>24<small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-list'>
                <p onClick={()=>addToDb('10s')} className='break-time'>10s</p>
                <p onClick={()=>addToDb('20s')} className='break-time'>20s</p>
                <p onClick={()=>addToDb('30s')} className='break-time'>30s</p>
                <p onClick={()=>addToDb('40s')} className='break-time'>40s</p>
                <p onClick={()=>addToDb('50s')} className='break-time'>50s</p>
            </div>
            <h3>Exercise Details</h3>
            <div className='time'>
                <p>Exercise Time <span>seconds</span></p>
            </div>
            <div className='time'>
                <p>Break time <span>seconds</span></p>
            </div>
            <button className='bnt-activity'>Activity Completed</button>
        </div>
    );
};

export default Sidebar;