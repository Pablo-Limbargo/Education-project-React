import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
})


// 29L - выносим данные в файл state, импортируем его тут и передаем в App и другие компоненты через пропсы
// 37L - используя bind - привязываем this к определенному объекту
// 37L - заменяем все вызовы на один dispatch и дальше прокидываем по всему дереву, удаляя все лишнее