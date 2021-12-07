import * as React from 'react';
import '../App.css';
import '../cssFiles/timeTable.css';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import CRI from '@mui/icons-material/Copyright';


import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { increase } from '../redux/actions';

let newDiv = null;
let myDiv = null;

function addElement(){

        newDiv = document.createElement('p');
        newDiv.innerHTML = 'sas';
        myDiv = document.getElementById('hola');
        // myDiv.parentNode.insertBefore(newDiv, myDiv);
        myDiv.parentNode.insertBefore(newDiv, myDiv);

}

function Advertises() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.CountReducer).count;

    const onAddHandler = () => {
        dispatch(increase());
        addElement();
    }

    return (
        <div className='blurBackground'>
            <div className='navBar'>
                <div className='logoContainer'>
                    <Link to='/'><div className='logo'></div></Link>
                </div>

                <div className='nav'>
                    <div className='element'>
                        <Link to='/'>главная</Link></div>
                    <div className='element'>
                        <Link to='/prices'>цены</Link></div>
                    <div className='element'>
                        <Link to='/timetable'>расписание</Link></div>
                    <div className='element'>
                        <Link to='/contact'>контакты</Link></div>
                    <div className='element'>
                        <Link to='/advertises'>акции</Link></div>
                </div>

                <div className='avatar'>
                    <Avatar></Avatar>
                </div>
            </div>

            <div>

                <Button onClick={onAddHandler}>ADD</Button>
                {count}
            </div>

            <p id='hola'>mamasita</p>




            <div className='footer'>
                <CRI />
                <div>2021, WHYCE RecordStudio</div>
            </div>
        </div>
    );

}

export default Advertises;