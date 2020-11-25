import React from 'react';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Home></Home>
        </Provider>
    );
}

export default App;
