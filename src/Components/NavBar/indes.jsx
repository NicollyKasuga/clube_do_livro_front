import {Container} from './style'
import { SearchBar } from '../SearchBar'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../../Assets/clube_do_livro_semfundo_cortado.png'
import {BiLogOut} from 'react-icons/bi'
import {AiFillPlusCircle} from "react-icons/ai"
import { useAuth } from '../../Contexts/Reader';
import { useState } from 'react'
import { AddBookModel } from '../AddBookModel/index'


export const NavBar = ({history}) => {

    const [bookModel, setBookModel] = useState(false)
    const{signOut} = useAuth();

    function ToggleModel(){
        setBookModel(!bookModel)
        console.log(bookModel)
    }

    function logout(){

        signOut()
        return history.push("/Entrar")
    }


    return(
        <>
            <AddBookModel bookModel={bookModel} setBookModel={setBookModel}/>
                <Container>
                    <div className='content_navbar'>
                    <img src={logo}/>
                    <SearchBar/>
                    <button  className='add_book_button' >
                        <AiFillPlusCircle className='add_button' onClick={() => ToggleModel()}/>
                    </button>
                    <button className='user_button'>
                    <FaUserCircle className='user_icon'/>
                    </button>
                    {/* <button onClick={() => logout()} className='logout_user'>
                        <BiLogOut className='logout_icon'/>
                    </button> */}
                    </div>
                </Container>
        </>
    )
    
}