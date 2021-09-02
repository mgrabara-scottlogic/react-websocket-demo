import { useState } from "react";

const ChatInput = ({ socket }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = () => {
      socket.emit('sendMessage', text);
      setText('');
    };
  
    return (
      <section>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </section>
    );
  };

export default ChatInput;
