import { Form, LineDiv } from './style';
import { Input } from '../Input/index';
import { Button } from '../Button/index';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../Service/index';
import { toast } from 'react-toastify';

export const FormLogin = ({ history, setAuthenticated }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Insira uma senha'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleLogin(data) {
    api
      .post('/entrar', data)
      .then((response) => {
        const { access_token } = response.data;

        localStorage.setItem('@Clube_do_livro:token', access_token);
        setAuthenticated(true);

        return history.push('/');
      })
      .catch((err) => toast.error('Email ou senha inválidos'));
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input
          type="text"
          placeholder="Digite seu email"
          label="Email:"
          register={register}
          data={'email'}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha:"
          register={register}
          data={'password'}
          error={errors.password?.message}
        />
        <LineDiv />
        <Button text="Entrar" />
      </Form>
    </>
  );
};
