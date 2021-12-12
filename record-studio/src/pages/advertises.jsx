import * as React from 'react';
import '../App.css';
import '../cssFiles/timeTable.css';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import CRI from '@mui/icons-material/Copyright';
import Linkk from '@mui/material/Link';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { increase, decrease } from '../redux/actions';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

let newTitle = null;
let newDesc = null;
let newBlock = null;
let myDiv = null;
let innerId = null;

let count = 3;

function addElement() {

    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;


    newTitle = document.createElement('div');
    newTitle.innerHTML = title;
    newTitle.id = 'blockTitle';

    newDesc = document.createElement('div');
    newDesc.innerHTML = desc;
    newDesc.id = 'blockDesc';

    innerId = document.createElement('div');
    innerId.id = count;

    newBlock = document.createElement('div');
    newBlock.id = 'blockContainer';

    newBlock.append(innerId);
    newBlock.append(newTitle);
    newBlock.append(newDesc);

    myDiv = document.getElementById('0');
    myDiv.parentNode.insertBefore(newBlock, myDiv);
    count++;

}

function deleteElement() {
    count--;
    myDiv = document.getElementById('blockContainer');
    myDiv.parentNode.removeChild(newBlock, myDiv);

}

function Advertises() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.CountReducer).count;

    const onAddHandler = () => {
        dispatch(increase());
        addElement();
    }

    const onDeleteHandler = () => {
        dispatch(decrease());
        deleteElement();
    }

    const auth = useAuth();
    const navigate = useNavigate();
    const onLogOut = () => {
        auth.logOut();
        navigate('/');
    };

    const [value, setValue] = React.useState('Controlled');

    const changeSize = (event) => {
        setValue(event.target.value);
    };

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
                        <Linkk href='/advertises'>акции</Linkk></div>
                </div>

                {auth.isLoaded && (auth.user ? (
                    <div className='flexAvatar'>

                        <Button color="inherit" onClick={onLogOut}>
                            Log out
                        </Button>
                        <div className='avatar'>
                            <Avatar></Avatar>
                        </div>

                    </div>
                ) : (
                    <div className='flexAvatar'>
                        <Link to="/login" underline="none" color="inherit" >
                            <Button color="inherit">Log in</Button>
                        </Link>
                        <Link to="/registration" underline="none" color="inherit" >
                            <Button color="inherit">Registration</Button>
                        </Link>
                    </div>
                ))}
            </div>

            {auth.isLoaded && auth.isAdmin ? (
                <>
                    <Button onClick={onAddHandler}>ADD</Button>
                    <Button onClick={onDeleteHandler}>DEL</Button>
                    {count}
                    <div className='description'>
                        <TextField
                            id="title"
                            label="Название"

                            maxRows={1}
                            fullWidth
                            variant="filled"
                        />
                        <TextField
                            id="desc"
                            label="Описание"
                            multiline
                            rows={4}
                            fullWidth
                            value={value}
                            onChange={changeSize}
                            variant="standard"
                        />
                    </div>

                </>
            ) : (
                <>

                </>
            )}

            <div id='0'>
                <div id="blockContainer">
                    <div id='1'></div>
                    <div id='blockTitle'>3 час записи - бесплатно</div>
                    <div id='blockDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eius voluptatum nobis quaerat nulla quam illo, repellat nihil ab possimus vel suscipit aliquam, nesciunt voluptas? Ducimus pariatur quisquam aperiam aspernatur.</div>
                </div>
                <div id="blockContainer">
                    <div id='2'></div>
                    <div id='blockTitle'>до 14 часов -50% на все</div>
                    <div id='blockDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt ab maiores cupiditate corporis quae excepturi! Officiis, nam aperiam aliquid magnam illum, vitae soluta repellat neque voluptatum architecto iure dolores.</div>
                </div>



            </div>
            <div className='footer'>
                <CRI />
                <div>2021, WHYCE RecordStudio</div>
            </div>
        </div>
    );

}

export default Advertises;

