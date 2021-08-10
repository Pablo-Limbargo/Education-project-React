const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'It`s my life', likeCount: 46},
            {id: 2, message: 'How much is the fish?', likeCount: 38},
            {id: 3, message: 'You are my heart...', likeCount: 35}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText, // - запрашиваем значение из state
                likeCount: 0
            }
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = ''; // - зануляем строку после ввода
            // return stateCopy;
    }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        default:
            return state;
    }

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText, // - запрашиваем значение из state
    //         likeCount: 0
    //     }
    //     state.posts.push(newPost);
    //     state.newPostText = ''; // - зануляем строку после ввода
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }
    //
    // return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;