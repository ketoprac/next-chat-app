import { auth } from "../firebase";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <Container className={`message ${messageClass}`}>
      <UserAvatar src={photoURL} alt="Avatar" />
      <p>{text}</p>
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
`;

export default ChatMessage;
