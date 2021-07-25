import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://html5css.ru/w3images/avatar2.png"/>
                {props.message}
                <div>
                    <span>Like {props.likeCount}</span>
                </div>

            </div>
        </div>
    )
}

export default Post;