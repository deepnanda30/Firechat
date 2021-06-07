import { React, useState, useRef } from "react";
import { auth, firestore } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";
import SignOut from "./SignOut";

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [form, setForm] = useState();
  const dummy = useRef()

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: form,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setForm("");
    dummy.current.scrollIntoView({behavior:'smooth'})
  };

  return (
    <div className="App">
      <header>
        <h1>FireChat🔥</h1>
        <SignOut />
      </header>
      <div>
        <main>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            <div ref={dummy} ></div>
        </main>
      </div>
      <form onSubmit={sendMessage}>
        <input value={form} onChange={(e) => setForm(e.target.value)}  placeholder="Type your text here.." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
