import * as React from 'react';
import Box from '@mui/material/Box';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Display() {
  return (
    <div style={{ width: '75%', display: 'flex', justifyContent: 'space-between', height: 'max-content', margin: '160px auto' }}>
      <Box sx={{}}>
        <h1>WHYCE</h1>
        <h2>Самая быстрорастущая студия звукозаписи в минске</h2>
        <div className='btnContainer'>
          <Link to='/signUpForStudio'><div className='signUpBtn'>Записаться</div></Link>
        </div>
      </Box>
      <Box sx={{}}>
        <div className='mainLogo'></div>
      </Box>
    </div>
  );
}