import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>

                </div>
                <div className={s.posts}>
                    <Post message='It`s my life' likeCount='46' />
                    <Post message='How much is the fish?' likeCount='38' />
                    <Post message='You are my heart...' likeCount='35' />
                </div>
            </div>
    )
}

export default MyPosts;