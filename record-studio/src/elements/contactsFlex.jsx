import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '../elements/card';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function contactsFlex() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: 'max-content', margin: '10px auto' }}>
            <Box sx={{ width: '48%', height: 'auto' }}>
                <div className='contactsContainer'>
                    <div className='textBackground'></div>
                    <div className='textContainer'>
                        <h4>Адрес</h4>
                        <p>ул. Энгельса, д17, второе помещение (ст. метро Октябрьская)</p>
                        <h4>Телефон</h4>
                        <p>+375291234567 - Артём</p>
                        <p>+375297788228 - Артём</p>

                        <h4>Почта</h4>
                        <p>vasyapupkin@sobaka.by</p>

                        <h4>Наши социальные сети</h4>
                        <p>
                            <Link href='https://www.instagram.com/p/CW3OtgagMxZ/'><InstagramIcon fontSize="large" sx={{ color: "red" }} /></Link>
                            <Link href='https://www.instagram.com/p/CW3OtgagMxZ/'><FacebookIcon fontSize="large" sx={{ color: "blue" }} /></Link>
                            <Link href='https://www.instagram.com/p/CW3OtgagMxZ/'><TwitterIcon fontSize="large" color="primary" /></Link>
                        </p>

                    </div>
                </div>
            </Box>
            <Box sx={{ width: '48%', height: 'auto' }}>
                <div className='map'></div>
            </Box>

        </div>
    );
}

