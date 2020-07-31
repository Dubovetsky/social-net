import React from 'react';
import style from'./Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profileBody}>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
        </div>
    )
};

export default Profile;