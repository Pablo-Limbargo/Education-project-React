import s from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.friend + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.activeLink}>
                <img alt='avatar-img' src={props.avatar}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Friend;