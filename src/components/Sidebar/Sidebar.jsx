import s from './Sidebar.module.css';
import FriendsOnline from "./FriendOnline/FriendsOnline";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    let friendsElements = props.friends.map(f => <FriendsOnline
        id={f.id}
        key={f.id}
        name={f.name}
        avatar={f.avatar}
    />)

    return (
        <div className={s.item}>
            <div className={s.link}>
                <NavLink to='/users'>Online</NavLink>
            </div>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;