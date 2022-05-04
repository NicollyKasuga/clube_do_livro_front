import { useCallback, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import api from '../../Service';

const ChatSocketIoContext = createContext({});

const ChatSocketIoContextProvider = ({ children }) => {
  const [SocketIO, setSocketIO] = useState(
    useCallback(() => {
      const SOCKET_URI = process.env.REACT_APP_SOCKET_URI;
      return io(SOCKET_URI);
    }, []),
  );
  const [chatInfo, setChatInfo] = useState({});
  const [roomId, setRoomId] = useState('');
  const [currentRoomMessages, setCurrentRoomMessages] = useState([]);

  const getRooms = useCallback(async (senderId, receiverId, accessToken) => {
    const response = await api.get(
      `/chat/rooms?first_reader_id=${senderId}&second_reader_id=${receiverId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data.room_id;
  }, []);

  const createRoom = useCallback(async (senderId, receiverId, accessToken) => {
    const response = await api.post(
      `/chat/rooms?first_reader_id=${senderId}&second_reader_id=${receiverId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data.room_id;
  }, []);

  const get_messages = useCallback(async (room_id, accessToken) => {
    const response = await api.get(`/chat/rooms/messages?room_id=${room_id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }, []);

  const saveMessage = useCallback(async (data, accessToken) => {
    const { sender_id, room_id, message_text } = data;
    const response = await api.post(
      '/chat/rooms/messages',
      {
        sender_id,
        room_id,
        message_text,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  }, []);

  return (
    <ChatSocketIoContext.Provider
      value={{
        SocketIO,
        chatInfo,
        setChatInfo,
        getRooms,
        roomId,
        get_messages,
        currentRoomMessages,
        saveMessage,
        createRoom,
      }}
    >
      {children}
    </ChatSocketIoContext.Provider>
  );
};

const useChatSocketIo = () => useContext(ChatSocketIoContext);

export { ChatSocketIoContextProvider, useChatSocketIo };
