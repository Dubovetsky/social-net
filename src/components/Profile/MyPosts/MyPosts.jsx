import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElement = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);    }

    return (
        <div className={style.postFrame}>
            <div className={style.newPost}>
                <h2>News Wall</h2>
                <textarea onChange={onPostChange} ref={newPostElement}
                    placeholder='Please write your text'
                    value={props.newPostText} />
                <div><button onClick={onAddPost}>Add news</button></div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;