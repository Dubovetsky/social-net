import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = (props) => {
        props.addPost();
    }

let onPostChange = (props) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}

    return (
        <div className={style.postFrame}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange ={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;