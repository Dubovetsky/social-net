import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer';
const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.postFrame}>
            <div className={style.newPost}>
                <h2>News Wall</h2>
                <textarea onChange={onPostChange} ref={newPostElement}
                    placeholder='Please write your text'
                    value={props.newPostText} />
                <div><button onClick={addPost}>Add news</button></div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;