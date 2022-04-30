import {ChatClosed, ChatOpened, UsersContainer, NavSearch, ListOfUsers, ChatDisplay, HeaderChat, MessagesContainer, InputContainer} from './style'
import { MessageCard } from '../MessageCard'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { CardUser } from '../CardUser'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FiSend} from 'react-icons/fi'
import bemvindo_logo from '../../Assets/bemvindo_logo.png'


export const Chat = () =>{

    const [users, setUsers] = useState([{'nome': "Nicolly", 'id':1}, {'nome': "Rodrigo", 'id':2}, {'nome': "Débora", 'id':3},
    {'nome': "Luana", 'id':4}, {'nome': "Ricardo", 'id':5}, {'nome': "Roafael", 'id':6},
    {'nome': "Robertinho Gameplays", 'id':7}, {'nome': "Robertinho Gameplays", 'id':8}]);


    const [currentChatName, setCurrentChatName] = useState('')

    const [currentChatMessages, setCurrentChatMessages] = useState([
        // {'send_id':1, 'receive_id':2, 'message': 'teste', 'hora':'01:45'},
        // {'send_id':2, 'receive_id':1, 'message': 'teste2', 'hora':'01:46'},
        // {'send_id':1, 'receive_id':2, 'message': 'teste3', 'hora':'01:45'},
        // {'send_id':2, 'receive_id':1, 'message': 'teste4', 'hora':'01:45'},
        // {'send_id':1, 'receive_id':2, 'message': 'teste5', 'hora':'01:45'}
    ])

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
                            
                            <CardUser user={user.nome} key={index} id={user.id} 
                            setCurrentChatMessages={setCurrentChatMessages}
                            setCurrentChatName={setCurrentChatName}/>

                        ))}
                    </ListOfUsers>
                </UsersContainer>
                <ChatDisplay>
                    <HeaderChat>
                        <BsFillChatLeftDotsFill className='chat_icon_header'/>
                        <p>{currentChatName ? currentChatName : "CHAT"}</p>
                        <MdKeyboardArrowDown className='arrow_icon_header' onClick={() => handleClick()}/>
                    </HeaderChat>
                    <MessagesContainer>
                        {currentChatMessages != 0 ? 
                        (
                            currentChatMessages.map((message, index) => (
                                <MessageCard key={index} send_user={message.send_id} currentChatName={currentChatName}
                                 currentChatMessages={currentChatMessages}
                                 message={message.message} hour={message.hora}/>
                            ))
                        ) 
                        :
                        (
                            <div className='background_color'>
                            <img src={bemvindo_logo} alt="logo"/>
                            </div>
                        )}
                    </MessagesContainer>
                    <InputContainer>
                            <div>
                                <input placeholder='Digite aqui...'></input>
                            </div>
                            <button><FiSend className='send_button_icon'/></button>
                    </InputContainer>
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