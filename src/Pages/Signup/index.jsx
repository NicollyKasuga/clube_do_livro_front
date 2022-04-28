import {ContainerImg} from '../../Components/ContainerImg/index'
import {FormDiv, Container} from './style'
import {FormSignup} from '../../Components/FormSignup/index'
import { LineDiv } from '../../Components/FormLogin/style'


export const Signup = (history) =>{

    return(
        <Container>
        <FormDiv>
            <h1>Cadastro</h1>
            <FormSignup/>
            <LineDiv/>
            <p className='text'>Já tem uma conta? <span onClick={() => history.push("/Entrar")}>Entrar</span></p>
        </FormDiv>
        <ContainerImg/>
        </Container>
    )
}