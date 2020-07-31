import style from'./SidebarDialogs.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <nav className={style.side}>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>
                {<button className={style.buttonSidebar}>All contacts</button>}</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs/1' activeClassName={style.activeLink}>
                <img src='../../../images/logo-friend-1.png' />Arthur Shelby</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs/2' activeClassName={style.activeLink}>
                <img src='../../../images/logo-friend-2.png' />John Shelby</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs/3' activeClassName={style.activeLink}>
                <img src='../../../images/logo-friend-3.png' />Grace Shelby</NavLink>
            </div>
        </nav>
    )
};

export default Sidebar;