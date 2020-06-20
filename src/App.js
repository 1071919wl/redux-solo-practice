import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import UserList from './container-users'
import UserDetail from './container-userInfo'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Users:</h2>
        <UserList />
        <hr/>
        <h2>User Info:</h2>
        <UserDetail />
      </div>
    </Provider>
  );
}

export default App;
