import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocNetApp from "./App";

// let rerenderEntireTree = (props) => {
    ReactDOM.render(<SocNetApp/>, document.getElementById('root'));
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//         let state = store.getState();
//         rerenderEntireTree(state);
//     }
// )


// 29L - выносим данные в файл state, импортируем его тут и передаем в App и другие компоненты через пропсы
// 37L - используя bind - привязываем this к определенному объекту
// 37L - заменяем все вызовы на один dispatch и дальше прокидываем по всему дереву, удаляя все лишнее
// 47L - убираем функцию subscribe и последующую перерисовку