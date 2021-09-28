import {render, screen} from '@testing-library/react';
import SocNetApp from './App';
import ReactDOM from "react-dom";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocNetApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
