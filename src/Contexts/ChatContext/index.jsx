import { useCallback, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const ChatSocketIoContext = createContext({});
const SOCKET_URI = 'http://localhost:5001';
// const SOCKET_URI = process.env.REACT_APP_SOCKET;

const ChatSocketIoContextProvider = ({ children }) => {
  const [SocketIO, setSocketIO] = useState(useCallback(() => io(SOCKET_URI)));
  const [chatInfo, setChatInfo] = useState({});

  // useEffect(() => {
  //   setSocketIO(io(SOCKET_URI));
  // }, []);

  // useEffect(() => {
  //   console.log(SocketIO);
  // }, [SocketIO]);

  return (
    <ChatSocketIoContext.Provider value={{ SocketIO, chatInfo, setChatInfo }}>
      {children}
    </ChatSocketIoContext.Provider>
  );
};

const useChatSocketIo = () => useContext(ChatSocketIoContext);

export { ChatSocketIoContextProvider, useChatSocketIo };
