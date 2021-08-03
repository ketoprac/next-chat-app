import { Button, IconButton, Typography } from "@material-ui/core";
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebase";
import firebase from "firebase";
import ChatMessage from "./ChatMessage";
import SignOut from "./SignOut";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

function ChatRoom() {
  const dummy = useRef();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Header>
        <Typography variant="subtitle">Chat Room🔥💬</Typography>

        <SignOut />
      </Header>
      <MessageContainer>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </MessageContainer>

      <Form onSubmit={sendMessage}>
        <Input
          placeholder="say something nice..."
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
          <SendButton type="submit">
            <Send style={{ color: "white" }} />
          </SendButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  color: white;
  background-color: #030308;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0f3460;
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 16px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  outline: 0;
  border: none;
`;

const Form = styled.form`
  display: flex;
  padding: 16px;
  background-color: #1a1a2e;
  position: sticky;
  z-index: 100;
  bottom: 0;
  border: none;
`;

const Input = styled.input`
  font-family: Poppins, "sans-serif";
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
  position: sticky;
  bottom: 0;
  background-color: #16213e;
  width: 100%;
`;

const SendButton = styled(Button)`
  color: white;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #1a1a2e;
  min-height: 90vh;
  position: relative;
  text-align: right;
  border: none;
  > .sent {
    flex-direction: row-reverse;
    margin-left: auto;
    right: 0;

    > p {
      text-align: left;
      background-color: #e94560;
      padding: 8px;
      border-radius: 10px 10px 0 10px;
      min-width: 60px;
      width: fit-content;
      margin-right: 4px;
    }
  }

  > .recieved {
    text-align: left;
    margin-left: -4px;
    > p {
      margin-left: 4px;
      background-color: #16213e;
      padding: 8px;
      border-radius: 10px 10px 10px 0;
      width: fit-content;
      min-width: 60px;
    }
  }
`;

export default ChatRoom;
