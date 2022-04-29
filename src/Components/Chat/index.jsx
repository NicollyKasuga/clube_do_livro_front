import {ChatClosed, ChatOpened, UsersContainer, NavSearch, ListOfUsers, ChatDisplay, HeaderChat, MessagesContainer, InputContainer} from './style'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { useState } from 'react'


export const Chat = () =>{

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
                    <NavSearch></NavSearch>
                    <ListOfUsers></ListOfUsers>
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