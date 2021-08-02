import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7nd8Q8HzEMWlWKes0OJeE-COLETPKuhlfg&usqp=CAU' alt='logo' />
        </header>
    )
}