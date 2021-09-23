import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Write your post'
                    component={Textarea}
                    name='newPostBody'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({
    form: 'addPosts'
})(MyPostsForm)

const MyPosts = React.memo(props => {
    console.log('RENDER')
    const onSubmit = (formData) => {
        console.log(formData)
    }

    let postElements = props.posts.map(p => <Post
        message={p.message}
        id={p.id}
        key={p.id}
        likeCount={p.likeCount}
    />)

    const addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    // let newPostElement = React.createRef();

    // let onAddPost = () => {
    //     //let text = newPostElement.current.value; - убираем эту строку, так как текст уже передан в state
    //     props.addPost(); // - убираем text
    //     // props.dispatch(addPostActionCreator());
    //     //props.updateNewPostText('') - убираем зачистку строки из UI в BLL
    // }
    //
    // let onPostChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.postArea}>
            <h2>My posts</h2>
            <div>
                <MyPostsReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

export default MyPosts;

// 31L - добавляем онклик на кнопку, в нее передаем калбэк функцию. Создаем новую переменную с криэйтРэф,
// добавляем ее в текстарею и функцию калбек из которой берем текущее значение
// 39L - выносим информацию из функций AddPost и onPostChange в state, создавая ActionCreator
// 43L - создаем контейнерные компоненты вокруг основных, чтобы убрать из них всю связь со стейтом