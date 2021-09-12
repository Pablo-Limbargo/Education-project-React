import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    placeholder="Enter your message"
                    name='newMessageBody'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialogsAddMessageForm'
})(DialogForm)

const Dialogs = (props) => {

    // let state = props.messagesPage;

    let dialogsElements = props.dialogs.map(d => <DialogItem
        id={d.id}
        key={d.id}
        name={d.name}
        avatar={d.avatar}
    />)

    let messageElements = props.messages.map(m => <Message
        id={m.id}
        key={m.id}
        text={m.text}
    />)

    // let newMessageElement = React.createRef();

    // let sendMessage = () => {
    //     // let text = e.target.value;
    //     props.sendMessage();
    //     // props.dispatch(sendMessageActionCreator())
    //     // newMessageElement.current.value = '';
    //     //L33 - строка для обнуления поля после ввода - не актуально
    // }
    //
    // let onMessageChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewMessageText(text);
    //     // props.dispatch(updateNewMessageTextActionCreator(text));
    // }

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>

    )
}

export default Dialogs;

// 24L - выносим все данные в отдельные объекты, готовим для использования MAP
// 25L - мапим данные, вносим сокращения 'm = message, d = dialog' для удобства
// 26L - переносим все данные (dialogs, messages, posts) на уровень выше, для начала в индекс
// и через пропсы прокидываем в нужные компоненты
// 33L - newMessageElement.current.value = ''; - строка для обнуления поля после ввода - актуальна только
// для этого урока, дальшее от нее избавляемся и зануляем только через обращение к state


