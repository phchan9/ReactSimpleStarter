import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { API_KEY } from './config';

// Create a component
const App = function() {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated html and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));