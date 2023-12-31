import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token,email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialtoken=localStorage.getItem('token');
  const [token, setToken] = useState(initialtoken);

  const[email,setEmail]= useState('');

 const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
   console.log(userIsLoggedIn);
   
    setToken(token);
    setEmail(email);
    localStorage.setItem('token',token);
    localStorage.setItem('Email',email);
   
  };

  const logoutHandler = () => {

   
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('Email');

  };

  const contextValue = {
    token: token,
    email:email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;