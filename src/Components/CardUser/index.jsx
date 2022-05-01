import { Container } from './style';
import { FaUserCircle } from 'react-icons/fa';
import api from '../../Service/index';
import { useChatSocketIo } from '../../Contexts/ChatContext';
import { useAuth } from '../../Contexts/Reader';

export const CardUser = ({
  user,
  id,
  setCurrentChatName,
  setCurrentChatMessages,
}) => {
  const { SocketIO, setChatInfo } = useChatSocketIo();
  const { reader } = useAuth();

  const usersRooms = [
    {
      reader_id: '88e67f7c-a147-4f77-8957-8bb9390ded1c',
      name: 'Thatiane',
      rooms: [1, 2],
    },
    {
      reader_id: '22a54145-0d75-4b2d-8c22-b3f54ba0a6d1',
      name: 'Rafael',
      rooms: [2, 3],
    },
    {
      reader_id: '5b2c61b5-ef7c-40cc-8f3c-f289dddb70ce',
      name: 'Livia',
      rooms: [1, 3],
    },
  ];

  function handleJoinRoom(e) {
    const receiver_id = e.getAttribute('data-id');
    const sender_id = reader.reader_id;

    setCurrentChatName(user);

    /* FAZER LÓGICA PARA BUSCAR ID DA ROOM DE ACORDO COM O READERS IDs NO DB */
    const roomsSender = usersRooms.find(
      (user) => user.reader_id === sender_id,
    ).rooms;
    const roomsReceiver = usersRooms.find(
      (user) => user.reader_id === receiver_id,
    ).rooms;

    const room = roomsSender.filter((room) => roomsReceiver.includes(room))[0];

    const chatInfo = {
      sender_id,
      receiver_id,
      room,
      created_at: Date.now(),
    };

    setChatInfo(chatInfo);

    SocketIO.emit('join_room', chatInfo);
    setCurrentChatMessages([]);
  }

  return (
    <Container
      onClick={(e) => handleJoinRoom(e.currentTarget)}
      data-id={id}
      data-user={user}
    >
      <FaUserCircle className="user_icon" />
      <div>
        <p className="user_name">{user}</p>
        <p className="message">last message</p>
      </div>
    </Container>
  );
};
