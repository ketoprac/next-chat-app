import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import ChatRoom from "../components/ChatRoom";
import SignIn from "../components/SignIn";


export default function Home() {
  const [user] = useAuthState(auth);
  
  return (
    <div>
      <Head>
        <title>Chat App</title>
      </Head>
      <section>
      {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
