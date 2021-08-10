import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    let friendsElements = props.friends.map(f => <Friend
        id={f.id}
        key={f.id}
        name={f.name}
        avatar={f.avatar}
    />)

    return (
        <div className={s.item}>
            <div className={s.link}>
                <NavLink to='/users'>Friends</NavLink>
            </div>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;