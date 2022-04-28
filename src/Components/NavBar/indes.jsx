import {Container} from './style'
import { SearchBar } from '../SearchBar'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../../Assets/clube_do_livro_semfundo_cortado.png'

export const NavBar = () => {
    return(
        <Container>
            <div className='content_navbar'>
            <img src={logo}/>
            <SearchBar/>
            <button className='user_button'>
            <FaUserCircle className='user_icon'/>
            </button>
            </div>
        </Container>
    )
    
}