import s from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {id: 1, message: 'It`s my life', likeCount: 46},
    {id: 2, message: 'How much is the fish?', likeCount: 38},
    {id: 3, message: 'You are my heart...', likeCount: 35}
]

let postElements = posts.map(p => <Post message={p.message} id={p.id} likeCount={p.likeCount}/>)

const MyPosts = () => {
    return (
        <div className={s.postArea}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;