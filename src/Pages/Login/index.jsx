import { Container, FormDiv } from './style';
import { ContainerImg } from '../../Components/ContainerImg/index';
import { FormLogin } from '../../Components/FormLogin/index';
import { Link, Redirect } from 'react-router-dom';

export const Login = ({ history, authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ContainerImg />
      <FormDiv>
        <h1>Bem-vindo</h1>
        <FormLogin history={history} setAuthenticated={setAuthenticated} />
        <p>
          Não tem uma conta? <Link to="/Cadastro">Cadastre-se!</Link>
        </p>
      </FormDiv>
    </Container>
  );
};
