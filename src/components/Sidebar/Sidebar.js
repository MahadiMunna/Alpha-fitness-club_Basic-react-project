import React from 'react';
import './Sidebar.css';
import image from '../../images/munna.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { addToLocalDb } from '../Utilities/Localdb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    const {time} = props;
    console.log(time)
    const addToDb = (id, brtime) =>{
        addToLocalDb(id);
    }

    const notify = () => toast("Congratulations!");
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
                <p onClick={()=>addToDb('10s',10)} className='break-time'>10s</p>
                <p onClick={()=>addToDb('20s',20)} className='break-time'>20s</p>
                <p onClick={()=>addToDb('30s',30)} className='break-time'>30s</p>
                <p onClick={()=>addToDb('40s',40)} className='break-time'>40s</p>
                <p onClick={()=>addToDb('50s',50)} className='break-time'>50s</p>
            </div>
            <h3>Exercise Details</h3>
            <div className='time'>
                <p>Exercise Time <span>seconds</span></p>
            </div>
            <div className='time'>
                <p>Break time <span>seconds</span></p>
            </div>
            <button onClick={notify} className='bnt-activity'>Activity Completed</button>
            <ToastContainer/>
        </div>
    );
};

export default Sidebar;