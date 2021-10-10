import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    catchAllHandledErrors = (promiseRejectionEvent) => {
        alert('Some error occurred');
        //console.error(promiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllHandledErrors);
    };
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllHandledErrors);
    };

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar
                    // state={props.state}
                />
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={ () => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
    );
    }
    }

    const mapStateToProps = (state) => (
        {
            initialized: state.app.initialized
        }
    )

    let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,
        {
            initializeApp
        }
    ))(App);

    const SocNetApp = (props) =>
        {
            return <BrowserRouter
                //basename={process.env.PUBLIC_URL}
            >
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        }

    export default SocNetApp;

    // 19L - 'react-router-dom -save' - установка роутинга. Пишем роуты, обрамляем в браузер роутер
    // 26-27L - меняем component на render, чтобы можно было прокинуть пропсы
    // 30L - оборачиваем браузер роутер арр в файле индекс, тут убираем