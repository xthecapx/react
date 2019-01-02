import React from 'react';

import { AuthContext } from '../../containers/ContextApi/ContextApi';

const login = props => (
  <AuthContext.Consumer>
    {authContext => {
      return <button onClick={authContext.toggleAuth}>{authContext.isAuth ? 'Logout' : 'Login'}</button>;
    }}
  </AuthContext.Consumer>
);

export default login;
