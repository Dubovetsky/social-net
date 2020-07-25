import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={style.profileHeader}>
                    <div className={style.cell}>
                        <div className={style.ava}>
                            <img className={style.avatar} src='../../../../images/profile-photo.png' />
                            <div className={style.textWrapper}>
                                <div className={style.textName}>Thomas Shelby</div>
                                <div className={style.textDescription}>Thomas Shelby, a fictional character from the TV Series Peaky Blinders</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ProfileInfo;