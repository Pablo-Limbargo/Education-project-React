import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/messagesReducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//
//     // let state = props.store.getState().messagesPage;
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 // let state = store.getState().messagesPage;
//
//                 let onSendMessage = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 };
//
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateNewMessageTextActionCreator(text));
//                 };
//
//                 return <Dialogs
//                     sendMessage={onSendMessage}
//                     updateNewMessageText={onMessageChange}
//                     messages={store.getState().messagesPage.messages}
//                     newMessageText={store.getState().messagesPage.newMessageText}
//                     dialogs={store.getState().messagesPage.dialogs}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },
        // updateNewMessageText: (text) => {
        //     dispatch(updateNewMessageTextActionCreator(text));
        // }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

// 24L - выносим все данные в отдельные объекты, готовим для использования MAP
// 25L - мапим данные, вносим сокращения 'm = message, d = dialog' для удобства
// 26L - переносим все данные (dialogs, messages, posts) на уровень выше, для начала в индекс
// и через пропсы прокидываем в нужные компоненты
// 33L - newMessageElement.current.value = ''; - строка для обнуления поля после ввода - актуальна только
// для этого урока, дальшее от нее избавляемся и зануляем только через обращение к state


