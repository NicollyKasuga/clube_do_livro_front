import React, { createContext, useContext, useState, useCallback } from 'react';
import jwt_decode from 'jwt-decode';

import api from '../../Service';
import { toast } from 'react-toastify';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [allReaders, setAllReaders] = useState([]);
  const [data, setData] = useState(() => {
    const reader = localStorage.getItem('@Clube_do_livro:reader');
    const token = localStorage.getItem('@Clube_do_livro:token');

    if (reader && token) {
      return { reader: JSON.parse(reader), accessToken: token };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/readers/entrar', { email, password });

    const { access_token: accessToken } = response.data;
    const reader = jwt_decode(accessToken).sub;
    delete reader.avatar;

    localStorage.setItem('@Clube_do_livro:reader', JSON.stringify(reader));
    localStorage.setItem('@Clube_do_livro:token', accessToken);
    setData({ reader, accessToken });
  }, []);

  const signUp = ({ token }) => {
    api
      .post(`/register_reader/${token}`)
      .then((response) => {
        toast.success('Faça seu Login!');
      })
      .catch((err) => {
        if (err.status === 409) {
          console.log(err);
          toast.error('Email já cadastrado!', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log(err);
        return err.status < 500;
      });
  };

  const sendEmail = ({ data }) => {
    console.log(data);
    api
      .post('/readers/cadastro', data)
      .then((response) => {
        console.log(response);
        toast.success(
          'Verifique seu email para confirmação de criação da conta!',
        );
      })
      .catch((err) => {
        return err.status < 500;
      });
  };

  const signOut = () => {
    localStorage.removeItem('@Clube_do_livro:reader');
    localStorage.removeItem('@Clube_do_livro:token');
    setData({});
  };

  const getAllReaders = useCallback(async (accessToken) => {
    const response = await api.get('/readers', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setAllReaders(response.data);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        reader: data.reader,
        accessToken: data.accessToken,
        signIn,
        signOut,
        signUp,
        sendEmail,
        getAllReaders,
        allReaders,
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
