import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import Flex from '../elements/flex'
import CRI from '@mui/icons-material/Copyright';

import Button from '@mui/material/Button';

import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Home() {


    const auth = useAuth();
    const navigate = useNavigate();
    const onLogOut = () => {
        auth.logOut();
        //navigate.push("/login");
    };

    return (
        <div className='MainPage'>
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

                {auth.isLoaded && (auth.user ? (
                    <>
                        {/* <Link to="/profile" underline="none" color="inherit" >
                            <Button color="inherit">
                                {auth.user.firstName} {auth.user.lastName}
                                <Avatar></Avatar>
                            </Button>
                        </Link>
                        <Button color="inherit" onClick={onLogOut}>
                            Log out
                        </Button> */}


                        <div className='avatar'>
                            <Avatar></Avatar>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" underline="none" color="inherit" >
                            <Button color="inherit">Log in</Button>
                        </Link>
                        <Link to="/registration" underline="none" color="inherit" >
                            <Button color="inherit">Registration</Button>
                        </Link>
                    </>
                ))}

                
            </div>
            <Flex></Flex>
            <div className='footer'>
                <CRI />
                <div>2021, WHYCE RecordStudio</div>
            </div>
        </div>
    );

}

export default Home;