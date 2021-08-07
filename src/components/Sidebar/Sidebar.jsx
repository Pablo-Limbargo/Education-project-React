import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let friendsElements = props.friends.map(f => <Friend
        id={f.id}
        name={f.name}
        avatar={f.avatar}
    />)

    return (
        <div className={s.item}>
            <h2>Friends</h2>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;