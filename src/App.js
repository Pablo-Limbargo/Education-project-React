import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

// 19L - 'react-router-dom -save' - установка роутинга. Пишем роуты, обрамляем в браузер роутер
// 26-27L - меняем component на render, чтобы можно было прокинуть пропсы
// 30L - оборачиваем браузер роутер арр в файле индекс, тут убираем