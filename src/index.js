import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ArticleFeed } from './pages/ArticleFeed';

const createRoot = () => {
    let element = document.createElement('div');
    element.id = "root";
    return element;
};

document.body.appendChild(createRoot());
ReactDOM.render(<ArticleFeed />, document.getElementById('root'));