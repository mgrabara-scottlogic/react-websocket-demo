import { useState } from "react";

const Feed = ({ socket }) => {
    const [messages, setMessages] = useState([]);
  
    socket.on('addMessage', (text) => {
      setMessages([...messages, text]);
    });
  
    return (
      <section>
        {messages.map((message) => (
          <article key={Math.random()}>{message}</article>
        ))}
      </section>
    );
  };

  export default Feed;
