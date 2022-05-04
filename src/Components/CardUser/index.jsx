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
      reader_id: '30704549-5d33-4a01-801d-6973f3b48222',
      name: 'Thatiane',
      rooms: [1, 2],
    },
    {
      reader_id: 'b36beb6b-876a-4693-bb0d-3fc2f7881bcd',
      name: 'Rafael',
      rooms: [2, 3],
    },
    {
      reader_id: '02909db3-10c1-4586-a490-4bee0800be24',
      name: 'Livia',
      rooms: [1, 3],
    },
  ];

  function handleJoinRoom(e) {
    const receiver_id = e.getAttribute('data-id');
    const sender_id = reader.reader_id;

    console.log(receiver_id);
    console.log(sender_id);

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
