import * as React from 'react';
import '../App.css';
import '../cssFiles/contacts.css'
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import CRI from '@mui/icons-material/Copyright';
import ContactsFlex from '../elements/contactsFlex';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { increase } from '../redux/actions';

function Account() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.CountReducer).count;

    const onAddHandler = () => {
        dispatch(increase());
    }

    return (
        <div>
            
            <Button onClick={onAddHandler}>ADD</Button>
            {count}
            <Button onClick={onAddHandler}>ADD</Button>
        </div>
    );

}

export default Account;
