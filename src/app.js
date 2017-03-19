import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';


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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello there</Text>
                </View>
            </Provider>
        );
    }
}

export default App;