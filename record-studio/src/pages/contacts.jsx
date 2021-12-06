import * as React from 'react';
import '../App.css';
import '../cssFiles/contacts.css'
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import CRI from '@mui/icons-material/Copyright';
import ContactsFlex from '../elements/contactsFlex';

function contact() {

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

            <div className='ourLocation'>Контактная информация</div>

            <div className='LocationContainer'>
                <ContactsFlex></ContactsFlex>
            </div>


            <div className='footer'>
                <CRI />
                <div>2021, WHYCE RecordStudio</div>
            </div>
        </div>
    );

}

export default contact;