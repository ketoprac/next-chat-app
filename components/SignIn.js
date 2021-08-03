import firebase from "firebase"
import { auth } from "../firebase";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import Head from "next/head";

function SignIn() {
  
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return (
    <Container>
      <Head>
        <title>Sign In - Chat App</title>
      </Head>

      <Section>
        <AppTitle variant="h4" style={{fontFamily: "Poppins", marginBottom: 8}}>
          ChatApp🔥💬
        </AppTitle>
        <Button variant="contained" style={{fontFamily: "Poppins"}}onClick={signInWithGoogle}>Sign in with Google</Button>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #082032;
  height: 100vh;
  color: white;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #16213E;
  box-shadow: 6px 10px 16px -1px rgba(0,0,0,0.75);
  padding: 20px;
`;

const AppTitle = styled(Typography)`
  padding: 8px;
`;

export default SignIn;
