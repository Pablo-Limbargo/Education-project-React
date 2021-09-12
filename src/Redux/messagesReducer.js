const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            // let newMessage = {id: 4, text: state.newMessageText}
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: action.newMessageBody}],
            };
            // stateCopy.messages = [...state.messages];
            // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageText = '';
            // return stateCopy;

        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.newText
        //     }
        // ;
            // stateCopy.newMessageText = action.newText;
            // return stateCopy;

        default:
            return state;
    }

    // if (action.type === SEND_MESSAGE) {
    //     let newMessage = {
    //         id: 4,
    //         text: state.newMessageText
    //     }
    //     state.messages.push(newMessage);
    //     state.newMessageText = '';
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     state.newMessageText = action.newText;
    // }
    //
    // return state;
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
// export const updateNewMessageTextActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: message});

export default messagesReducer;