import React, { Component } from 'react';

import Login from '../../components/ContextApi/Login';
import Profile from '../../components/ContextApi/Profile';

export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {}
});

class ContextApi extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      };
    });
  };

  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default ContextApi;
