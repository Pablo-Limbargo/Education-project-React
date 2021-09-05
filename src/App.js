import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar
                // state={props.state}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                    // messagesPage={props.state.messagesPage}
                    // dispatch={props.dispatch}
                    // store={props.store}
                />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer
                    // store={props.store}
                    // profilePage={props.state.profilePage}
                    // dispatch={props.dispatch}
                />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;

// 19L - 'react-router-dom -save' - установка роутинга. Пишем роуты, обрамляем в браузер роутер
// 26-27L - меняем component на render, чтобы можно было прокинуть пропсы
// 30L - оборачиваем браузер роутер арр в файле индекс, тут убираем