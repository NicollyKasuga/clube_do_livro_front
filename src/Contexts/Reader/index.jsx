import React, { createContext, useContext, useState, useCallback } from 'react';
import jwt_decode from 'jwt-decode';

import api from '../../Service';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const reader = localStorage.getItem('@Clube_do_livro:reader');
    const token = localStorage.getItem('@Clube_do_livro:token');

    if (reader && token) {
      return { reader: JSON.parse(reader), accessToken: token };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/entrar', { email, password });

    const { access_token: accessToken } = response.data;
    const reader = jwt_decode(accessToken).sub;
    delete reader.avatar;

    localStorage.setItem('@Clube_do_livro:reader', JSON.stringify(reader));
    localStorage.setItem('@Clube_do_livro:token', accessToken);
    setData({ reader, accessToken });
  }, []);

  const signOut = () => {
    localStorage.removeItem('@Clube_do_livro:reader');
    localStorage.removeItem('@Clube_do_livro:token');
    setData({});
  };

  return (
    <AuthContext.Provider
      value={{
        reader: data.reader,
        accessToken: data.accessToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
