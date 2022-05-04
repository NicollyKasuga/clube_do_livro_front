import {
  ChatClosed,
  ChatOpened,
  UsersContainer,
  NavSearch,
  ListOfUsers,
  ChatDisplay,
  HeaderChat,
  MessagesContainer,
  InputContainer,
} from './style';
import { MessageCard } from '../MessageCard';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { CardUser } from '../CardUser';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import bemvindo_logo from '../../Assets/bemvindo_logo.png';
import { useAuth } from '../../Contexts/Reader';
import { useEffect } from 'react';

import { useChatSocketIo } from '../../Contexts/ChatContext';

export const Chat = () => {
  const { chatInfo, SocketIO } = useChatSocketIo();
  const { accessToken, reader, getAllReaders, allReaders } = useAuth();
  const [chatOpened, setChatOpened] = useState(false);
  const [currentChatName, setCurrentChatName] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentChatMessages, setCurrentChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (chatOpened) {
      getAllReaders(accessToken);
    }
  }, [chatOpened]);

  SocketIO.on('receive_message', (data) => {
    setCurrentChatMessages([...currentChatMessages, data]);
  });

  function sendMessage() {
    chatInfo.message_text = currentMessage;
    SocketIO.emit('send_message', chatInfo, accessToken);
  }

  function handleClick() {
    setChatOpened(!chatOpened);
  }

  return (
    <>
      {chatOpened ? (
        <ChatOpened>
          <UsersContainer>
            <NavSearch>
              <div className="div_input">
                <AiOutlineSearch className="search_icon" />
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  placeholder="Nome da pesquisa..."
                ></input>
              </div>
            </NavSearch>
            <ListOfUsers>
              {allReaders
                .filter((user) => user.reader_id !== reader.reader_id)
                .filter((user) =>
                  inputValue
                    ? user.name.toLowerCase().includes(inputValue.toLowerCase())
                    : user,
                )
                .map((user, index) => (
                  <CardUser
                    user={user.name}
                    key={index}
                    id={user.reader_id}
                    setCurrentChatMessages={setCurrentChatMessages}
                    setCurrentChatName={setCurrentChatName}
                  />
                ))}
            </ListOfUsers>
          </UsersContainer>
          <ChatDisplay>
            <HeaderChat>
              <BsFillChatLeftDotsFill className="chat_icon_header" />
              <p>{currentChatName ? currentChatName : 'CHAT'}</p>
              <MdKeyboardArrowDown
                className="arrow_icon_header"
                onClick={() => handleClick()}
              />
            </HeaderChat>
            <MessagesContainer>
              {currentChatMessages.length > 0 ? (
                currentChatMessages.map((message, index) => (
                  <MessageCard
                    key={index}
                    send_user={message.sender_id}
                    currentChatName={currentChatName}
                    currentChatMessages={currentChatMessages}
                    message={message.message_text}
                    hour={message.created_at}
                  />
                ))
              ) : (
                <div className="background_color">
                  <img src={bemvindo_logo} alt="logo" />
                </div>
              )}
            </MessagesContainer>
            <InputContainer>
              <div>
                <input
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Digite aqui..."
                ></input>
              </div>
              <button onClick={sendMessage}>
                <FiSend className="send_button_icon" />
              </button>
            </InputContainer>
          </ChatDisplay>
        </ChatOpened>
      ) : (
        <ChatClosed onClick={() => handleClick()}>
          <BsFillChatLeftDotsFill className="chat_icon" />
        </ChatClosed>
      )}
    </>
  );
};
