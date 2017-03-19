import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

//components
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount(){
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDJ2znhLVjqcmvvQfZLsGW4Xn0Dur3eKFg",
            authDomain: "manager-1d30b.firebaseapp.com",
            databaseURL: "https://manager-1d30b.firebaseio.com",
            storageBucket: "manager-1d30b.appspot.com",
            messagingSenderId: "592539549006"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm></LoginForm>
            </Provider>
        );
    }
}

export default App;