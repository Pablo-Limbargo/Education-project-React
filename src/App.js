import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import {updateNewMessageText} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar
                // state={props.state}
            />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                    // messagesPage={props.state.messagesPage}
                    // dispatch={props.dispatch}
                    // store={props.store}
                />}/>
                <Route path='/profile' render={() => <Profile
                    // store={props.store}
                    // profilePage={props.state.profilePage}
                    // dispatch={props.dispatch}
                />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;

// 19L - 'react-router-dom -save' - установка роутинга. Пишем роуты, обрамляем в браузер роутер
// 26-27L - меняем component на render, чтобы можно было прокинуть пропсы
// 30L - оборачиваем браузер роутер арр в файле индекс, тут убираем