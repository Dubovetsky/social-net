import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.newsWrapper}>
            <div className={style.news}>{props.message}</div>
            <div className={style.like}><span>like</span> {props.likesCount}</div>
        </div>
    )
};

export default Post;