import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post
        message={p.message}
        id={p.id}
        likeCount={p.likeCount}
    />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postArea}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

// 31L - добавляем онклик на кнопку, в нее передаем калбэк функцию. Создаем новую переменную с криэйтРэф,
// добавляем ее в текстарею и функцию калбек из которой берем текущее значение