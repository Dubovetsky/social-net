import React from 'react';
import style from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import Sidebar from '../Sidebar/Sidebar';


const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profileBody}>
                <ProfileInfo />
                <MyPosts posts={props.profilePage.posts} 
                     dispatch={props.dispatch}
                     newPostText= {props.profilePage.newPostText} />
            </div>
            {/* <div className={style.sidebar}><Sidebar /></div>     */}
        </div>
    )
};

export default Profile;