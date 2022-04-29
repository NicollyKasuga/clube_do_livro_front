import {ChatClosed, ChatOpened, UsersContainer, NavSearch, ListOfUsers, ChatDisplay, HeaderChat, MessagesContainer, InputContainer} from './style'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { CardUser } from '../CardUser'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


export const Chat = () =>{

    const users = [{'nome': "Robertinho Gameplays", 'id':1}, {'nome': "Robertinho Gameplays", 'id':2}, {'nome': "Robertinho Gameplays", 'id':2}]
    const [chatOpened, setChatOpened] = useState(false)

    function handleClick(){
        console.log("clicado")
        setChatOpened(!chatOpened)
        console.log(chatOpened)
    }

    return (
        <>
        {chatOpened ?
        (
            <ChatOpened>
                <UsersContainer>
                    <NavSearch>
                        <div className='div_input'>
                        <AiOutlineSearch className='search_icon'/>
                        <input type="text" placeholder="Nome da pesquisa..."></input>
                        </div>
                    </NavSearch>
                    <ListOfUsers>
                        {users.map((user, index) =>(
                            
                            <CardUser user={user.nome} key={index} id={user.id}/>
                        ))}
                    </ListOfUsers>
                </UsersContainer>
                <ChatDisplay>
                    <HeaderChat></HeaderChat>
                    <MessagesContainer></MessagesContainer>
                    <InputContainer></InputContainer>
                </ChatDisplay>

            </ChatOpened>  
        )
        :
        (
            <ChatClosed onClick={() => handleClick()}>
            <BsFillChatLeftDotsFill className='chat_icon'/>
            </ChatClosed>
        )}

        </>
    )
}