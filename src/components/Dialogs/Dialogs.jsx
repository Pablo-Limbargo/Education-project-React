import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem
        id={d.id}
        name={d.name}
        avatar={d.avatar}
    />)

    let messageElements = props.messagesPage.messages.map(m => <Message
        id={m.id}
        text={m.text}
    />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
        newMessageElement.current.value = '';
        //L33 - строка для обнуления поля после ввода
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;

// 24L - выносим все данные в отдельные объекты, готовим для использования MAP
// 25L - мапим данные, вносим сокращения 'm = message, d = dialog' для удобства
// 26L - переносим все данные (dialogs, messages, posts) на уровень выше, для начала в индекс
// и через пропсы прокидываем в нужные компоненты
// L33 - newMessageElement.current.value = ''; - строка для обнуления поля после ввода

