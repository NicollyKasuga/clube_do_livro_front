import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const ChatSocketIoContext = createContext({});

const ChatSocketIoContextProvider = ({ children }) => {
  const [SocketIO, setSocketIO] = useState(null);

  // const SOCKET_URI = process.env.REACT_APP_SOCKET;
  useEffect(() => {
    const SOCKET_URI = 'ws://localhost:5000';
    setSocketIO(io(SOCKET_URI));
  }, []);

  return (
    <ChatSocketIoContext.Provider value={{ SocketIO }}>
      {children}
    </ChatSocketIoContext.Provider>
  );
};

const useChatSocketIo = () => useContext(ChatSocketIoContext);

export { ChatSocketIoContextProvider, useChatSocketIo };
