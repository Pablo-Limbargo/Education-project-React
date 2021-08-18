import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.ibb.co/yRBGCQd/d5b9c7f1db5d414b93a6b44ad38e0409.png' alt='symbol-img'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;

