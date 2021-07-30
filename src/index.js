import React from 'react';
import {rerenderEntireTree} from "./render";
import state from "./Redux/state";

rerenderEntireTree(state);


// 29L - выносим данные в файл state, импортируем его тут и передаем в App и другие компоненты через пропсы