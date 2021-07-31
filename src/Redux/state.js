let store = {
    _state: {
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
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'It`s my life', likeCount: 46},
                {id: 2, message: 'How much is the fish?', likeCount: 38},
                {id: 3, message: 'You are my heart...', likeCount: 35}
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {id: 2, name: 'Sveta', avatar: 'https://html5css.ru/howto/img_avatar2.png'},
                {id: 1, name: 'Valera', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
                {id: 3, name: 'Anna', avatar: 'https://html5css.ru/w3images/avatar6.png'},
            ]
        }

    },
    _callSubscriber() { // переименовали rerenderEntireTree в callSubscriber
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() { // - убираем postMessage так как значение уже есть в newPostText
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText, // - запрашиваем значение из state
    //         likeCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''; // - зануляем строку после ввода
    //     this._callSubscriber(this._state);
    // },
    // sendMessage(sendMessage) {
    //     let newMessage = {
    //         id: 4,
    //         text: sendMessage
    //     }
    //     this._state.messagesPage.messages.push(newMessage);
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newText) {
    //     this._state.messagesPage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText, // - запрашиваем значение из state
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''; // - зануляем строку после ввода
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 4,
                text: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;

// 33L - создаем функции по добавлению постов и сообщений в диалоге,
// прокидываем их через пропсы в нужные компоненты
// 37L - переделываем файл state в store, ООП-шный объект
// 38L - создаем метод dispatch и в него засовываем всю логику по другим методам
// с обязательным указанием type, старые методы удаляем