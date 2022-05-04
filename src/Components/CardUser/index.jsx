import { Container } from './style';
import { FaUserCircle } from 'react-icons/fa';
import { useChatSocketIo } from '../../Contexts/ChatContext';
import { useAuth } from '../../Contexts/Reader';

export const CardUser = ({
  user,
  id,
  setCurrentChatName,
  setCurrentChatMessages,
}) => {
  const { SocketIO, setChatInfo, getRooms, get_messages, createRoom } =
    useChatSocketIo();
  const { reader, accessToken } = useAuth();

  async function handleJoinRoom(e) {
    const senderId = reader.reader_id;
    const receiverId = e.getAttribute('data-id');

    setCurrentChatName(user);

    let roomId = await getRooms(senderId, receiverId, accessToken);

    if (!roomId) {
      roomId = await createRoom(senderId, receiverId, accessToken);
    }

    const chatInfo = {
      sender_id: senderId,
      receiver_id: receiverId,
      room_id: roomId,
    };

    setChatInfo(chatInfo);

    SocketIO.emit('join_room', chatInfo);

    const currentRoomMessages = await get_messages(roomId, accessToken);
    setCurrentChatMessages(currentRoomMessages);
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
