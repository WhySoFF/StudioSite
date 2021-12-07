import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Card from '../elements/card'

export default function Display() {
    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '60vh', margin: '50px auto' }}>
                <Box sx={{ width: '48%', height: '100%' }}>
                    <h3>Полный продакшн песни</h3>
                    <div className='textPriceContainer'>
                        от
                        <div className='textPrice'>1000</div>
                        BYN
                    </div>
                    <div className='nbtnContainer'>
                        <Link to="/signUpForStudio"><div className='normalSignUpButton'>Записаться</div></Link>
                    </div>
                </Box>
                <Box sx={{ width: '48%', height: '100%', display: 'grid' }}>
                    <Card num='01' title='запись' text='Запись проходит у нас на студии в один из нашей линейки микрофонов: soyuz 017 Tube, Neuman TLM 102, Rode NT1000' pre='' price='25' post='BYN / час'></Card>
                    <Card num='02' title='сведение/мастеринг' text='Сведение и Мастеринг можут проходить как на студии, так и удаленно. Этим процессом будет заниматься наш известный миксингинженер - Шелегович Артём' pre='' price='50' post='BYN'></Card>
                </Box>

            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '60vh', margin: '50px auto' }}>

                <Box sx={{ width: '48%', height: '100%', display: 'grid' }}>
                    <Card num='03' title='арранжировка' text='Написание арранжировки(инструментала) так же проходит на студии. Есть возможность записывать живые инструменты. За это отвечает известнейший продюсер - Артём Шелегович' pre='от' price='100' post='$'></Card>
                    <Card num='04' title='написание текста' text='Написание текста(гострайтинг) делается только на заказ. Этим занимается наш профессиональный гострайтер-поэт - Артём Шелегович' pre='' price='80' post='BYN'></Card>
                </Box>
                <Box sx={{ width: '48%', height: '100%' }}>
                    <div class='floater'>
                        <h3>Песня под ключ</h3>
                        <div className='textPriceContainer'>
                            от
                            <div className='textPrice'>400</div>
                            BYN
                        </div>
                        <div className='nbtnContainer'>
                            <Link to="/signUpForStudio"><div className='normalSignUpButton'>Записаться</div></Link>
                        </div>
                    </div>
                </Box>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '60vh', margin: '50px auto' }}>
                <Box sx={{ width: '48%' }}>
                    <h3>Запись альбома</h3>
                    <div className='textPriceContainer'>
                        от
                        <div className='textPrice'>2000</div>
                        BYN
                    </div>
                    <div className='nbtnContainer'>
                        <Link to="/signUpForStudio"><div className='normalSignUpButton'>Записаться</div></Link>
                    </div>
                </Box>
                <Box sx={{ width: '48%', display: 'grid', }}>
                    <Card num='05' title='клип' text='Съемка клипа может быть как на студии, так и на любой другой доступной локации. Можнтажем и съемкой занимается наш известнейший оператор - Артём Шелегович' pre='от' price='300' post='BYN'></Card>
                    <Card num='06' title='обложка' text='Обложка играет немаломважную роль в продвижении трека. Наш профессиональный дизайнер - Артём Шелегович поможет вам разобраться в этом нелегком деле' pre='' price='80' post='BYN'></Card>
                </Box>
            </div>
        </>
    );
}

