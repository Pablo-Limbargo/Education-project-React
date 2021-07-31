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
        //let text = newPostElement.current.value; - убираем эту строку, так как текст уже передан в state
        //props.addPost(); // - убираем text
        props.dispatch({type: 'ADD-POST'});
        //props.updateNewPostText('') - убираем зачистку строки из UI в BLL
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }

    return (
        <div className={s.postArea}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
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