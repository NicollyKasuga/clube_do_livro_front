import {Container, ContainerImg, FormDiv} from './style'
import clube_do_livro_semfundo from '../../Assets/clube_do_livro_semfundo.png'
import {FormLogin} from '../../Components/FormLogin/index'

export const Login = () => {
    return(
        <Container>
        <ContainerImg>
            <img src={clube_do_livro_semfundo} alt="Clube do Livro"></img>
        </ContainerImg>
        <FormDiv>
            <h1>Bem-vindo</h1>
            <FormLogin/>
            <p>Não tem uma conta? <span>Cadastre-se!</span></p>
        </FormDiv>
        </Container>
    )
}
