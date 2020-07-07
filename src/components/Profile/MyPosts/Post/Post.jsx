import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://s3.nat-geo.ru/images/2019/4/10/4ca347667700403382d11aacf52f0e43.max-2000x1000.jpg' />
            {props.message}
            <div><span>like</span> {props.likesCount}</div>
        </div>
    )
};

export default Post;