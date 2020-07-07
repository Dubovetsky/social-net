import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={style.profileHeader}>
                    <div className={style.cell}>
                        <img src='https://c.radikal.ru/c35/1912/e5/d52339da4ae2.jpg' />
                    </div>
                </div>
                <div className={style.ava}>
                    ava+description
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;