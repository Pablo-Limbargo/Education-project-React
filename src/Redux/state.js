import {rerenderEntireTree} from "../render";

let state = {
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Valera', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
            {id: 2, name: 'Sveta', avatar: 'https://html5css.ru/howto/img_avatar2.png'},
            {id: 3, name: 'Anna', avatar: 'https://html5css.ru/w3images/avatar6.png'},
            {id: 4, name: 'Ivan', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
            {id: 5, name: 'Lena', avatar: 'https://html5css.ru/howto/img_avatar2.png'}
        ],
        messages: [
            {id: 1, text: 'Hi! How are you doing?'},
            {id: 2, text: 'What`s new?'},
            {id: 3, text: 'Hi man, I`m very well, thanks!'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'It`s my life', likeCount: 46},
            {id: 2, message: 'How much is the fish?', likeCount: 38},
            {id: 3, message: 'You are my heart...', likeCount: 35}
        ]
    },
    sidebar: {
        friends: [
            {id: 2, name: 'Sveta', avatar: 'https://html5css.ru/howto/img_avatar2.png'},
            {id: 1, name: 'Valera', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
            {id: 3, name: 'Anna', avatar: 'https://html5css.ru/w3images/avatar6.png'},
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let sendMessage = (sendMessage) => {
    let newMessage = {
        id: 4,
        text: sendMessage
    }
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export default state;

// L33 - создаем функции по добавлению постов и сообщений в диалоге,
// прокидываем их через пропсы в нужные компоненты