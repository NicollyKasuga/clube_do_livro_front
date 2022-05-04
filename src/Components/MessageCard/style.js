import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  min-width: 45%;
  max-width: 90%;
  height: fit-content;
  margin: 9px 0px;
  padding: 5px;
  display: flex;
  background: ${(props) => (props.is_user ? 'var(--blue)' : 'var(--grey)')};
  align-self: ${(props) => (props.is_user ? 'end' : '')};
  border-radius: ${(props) =>
    props.is_user ? '4px 0px 0px 4px' : '0px 4px 4px 0px'};
  justify-content: center;
  flex-direction: column;

  p,
  span {
    color: white;
    margin-bottom: 5px;
  }

  .text_message_users {
    font-size: 16px;
    word-break: break-all;
  }

  .hour_message_users {
    font-size: 12px;
    text-align: end;
    margin-right: 6px;
  }
`;
