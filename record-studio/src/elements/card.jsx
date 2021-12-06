import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div className='smallCard'>
            <div className='cardTop'>
                <div className='cardNumber'>{props.num}</div>
                <div className='cardTitle'>{props.title}</div>
            </div>
            <div className='cardMiddle'>
                <div className='cardText'>{props.text}</div>
            </div>
            <div className='cardBottom'>
                    <Link to="/"><div className='littleSignUpBtn'>Записаться</div></Link>
                <div className='PriceContainer'>
                    <div>{props.pre}</div>
                    <div className='cardPrice'>{props.price}</div>
                    <div>{props.post}</div>
                </div>
            </div>
        </div>
    );
}