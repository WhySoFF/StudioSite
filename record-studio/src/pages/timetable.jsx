import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Linkk from '@mui/material/Link';
import Avatar from '../elements/avatar';
import CRI from '@mui/icons-material/Copyright';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Timetable() {

    const auth = useAuth();
    const navigate = useNavigate();
    const onLogOut = () => {
        auth.logOut();
        navigate('/');
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

            <div className='calendar'></div>

            <div className='footer'>
                <CRI />
                <div>2021, WHYCE RecordStudio</div>
            </div>
        </div>
    );

}

export default Timetable;