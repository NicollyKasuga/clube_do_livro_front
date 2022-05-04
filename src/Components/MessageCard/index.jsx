import { Container } from './style';
import { useEffect, useRef } from 'react';
import { useAuth } from '../../Contexts/Reader';

export const MessageCard = ({
  send_user,
  currentChatMessages,
  currentChatName,
  message,
  hour,
}) => {
  const { reader } = useAuth();

  let is_user = false;
  const user_id = reader.reader_id;

  if (String(user_id) === String(send_user)) {
    is_user = true;
  }

  const messagesendRef = useRef(null);

  const scrollToBottom = () => {
    messagesendRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChatMessages, currentChatName]);

  return (
    <Container is_user={is_user}>
      <p className="text_message_users">{message}</p>
      <span className="hour_message_users">{hour}</span>
      <div ref={messagesendRef} />
    </Container>
  );
};
