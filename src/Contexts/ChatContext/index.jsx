import { useCallback, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const ChatSocketIoContext = createContext({});

const ChatSocketIoContextProvider = ({ children }) => {
  const [SocketIO, setSocketIO] = useState(
    useCallback(() => {
      const SOCKET_URI = process.env.REACT_APP_SOCKET_URI;
      return io(SOCKET_URI);
    }, []),
  );
  const [chatInfo, setChatInfo] = useState({});

  return (
    <ChatSocketIoContext.Provider value={{ SocketIO, chatInfo, setChatInfo }}>
      {children}
    </ChatSocketIoContext.Provider>
  );
};

const useChatSocketIo = () => useContext(ChatSocketIoContext);

export { ChatSocketIoContextProvider, useChatSocketIo };
