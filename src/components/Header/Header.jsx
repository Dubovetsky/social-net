import React from 'react';
import style from'./Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <img src='../../../../images/Logo.png' />
                <i>Social Network</i>
            </div>           
        </header>
    )
};

export default Header;