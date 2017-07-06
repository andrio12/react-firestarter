import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';

// Configuration for firebase
var config = {
  apiKey: "AIzaSyAO074sQDgOLdfGdCPa6PzG6Xt9NI7_ZFY",
  authDomain: "react-firestarter.firebaseapp.com",
  databaseURL: "https://react-firestarter.firebaseio.com",
  projectId: "react-firestarter",
  storageBucket: "react-firestarter.appspot.com",
  messagingSenderId: "125744706353"
};
Firebase.initializeApp(config);

// Get a reference to the database service
var database = Firebase.database();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
