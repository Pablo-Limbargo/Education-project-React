import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogs = [
    {id: 1, name: 'Valera', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
    {id: 2, name: 'Sveta', avatar: 'https://html5css.ru/howto/img_avatar2.png'},
    {id: 3, name: 'Anna', avatar: 'https://html5css.ru/w3images/avatar6.png'},
    {id: 4, name: 'Ivan', avatar: 'https://schoolsw3.com/tryit/avatar.png'},
    {id: 5, name: 'Lena', avatar: 'https://html5css.ru/howto/img_avatar2.png'}
]

let dialogsElements = dialogs.map(d => <DialogItem
    id={d.id}
    name={d.name}
    avatar={d.avatar}
/>)

let messages = [
    {id: 1, text: 'Hi! How are doing?'},
    {id: 2, text: 'What`s new?'},
    {id: 3, text: 'Hi man, I`m very well, thanks!'}
]

let messageElements = messages.map(m => <Message id={m.id} text={m.text}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs;

// 24L - выносим все данные в отдельные объекты, готовим для использования MAP
// 25L - мапим данные, вносим сокращения 'm = message, d = dialog' для удобства