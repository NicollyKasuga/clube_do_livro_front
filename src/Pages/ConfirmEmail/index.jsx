import { Container } from "./style"
import logo from '../../Assets/clube_do_livro_semfundo_cortado.png'
import wave from '../../Assets/wave.svg'

export const ConfirmEmail =() =>{
    return (
        <Container>
            <img className="logo_confirm" src={logo} alt="logo"/>
            <h1 className="text_1">Email confirmado!</h1>
            <h2 className="text_2">Estamos felizes com sua chegada!</h2>
            <img className="wave" src={wave} alt=""/>
        </Container>
    )
}