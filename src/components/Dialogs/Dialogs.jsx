import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi! How are doing?
                </div>
                <div className={s.message}>
                    What`s new?
                </div>
                <div className={s.message}>
                    Hi man, I`m very well, thanks!
                </div>
            </div>
        </div>

    )
}

export default Dialogs;