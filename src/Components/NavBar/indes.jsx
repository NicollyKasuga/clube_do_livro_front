import {Container} from './style'
import { SearchBar } from '../SearchBar'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../../Assets/clube_do_livro_semfundo_cortado.png'
import {BiLogOut} from 'react-icons/bi'
import { useAuth } from '../../Contexts/Reader';

export const NavBar = ({history}) => {

    const{signOut} = useAuth();

    function logout(){

        signOut()
        return history.push("/Entrar")
    }

    return(
        <Container>
            <div className='content_navbar'>
            <img src={logo}/>
            <SearchBar/>
            <button className='user_button'>
            <FaUserCircle className='user_icon'/>
            </button>
            <button onClick={() => logout()} className='logout_user'> <BiLogOut className='logout_icon'/></button>
            </div>
        </Container>
    )
    
}