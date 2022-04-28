import {Container, FormDiv} from './style'
import {ContainerImg} from '../../Components/ContainerImg/index'
import {FormLogin} from '../../Components/FormLogin/index'

export const Login = () => {
    return(
        <Container>
        <ContainerImg/>
        <FormDiv>
            <h1>Bem-vindo</h1>
            <FormLogin/>
            <p>Não tem uma conta? <span>Cadastre-se!</span></p>
        </FormDiv>
        </Container>
    )
}
