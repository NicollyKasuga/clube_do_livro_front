import { Container } from "./style"
import logo from '../../Assets/clube_do_livro_semfundo_cortado.png'
import wave from '../../Assets/wave.svg'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useAuth } from "../../Contexts/Reader"
import { Link } from "react-router-dom"

export const ConfirmEmail =({history}) =>{

    const {signUp} = useAuth();

    const {token} = useParams()

    function cadastrar() {
        signUp({token})
    }

    cadastrar()

    return (
        <Container>
            <img className="logo_confirm" src={logo} alt="logo"/>
            <h1 className="text_1">Email confirmado!</h1>
            <h2 className="text_2">Estamos felizes com sua chegada!</h2>
            <img className="wave" src={wave} alt=""/>
            <Link to="/Entrar">Entrar</Link>
        </Container>
    )
}