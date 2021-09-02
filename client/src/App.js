import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';

import ChatInput from './features/ChatInput';
import Feed from './features/Feed';


function App() {
  const socket = io('http://localhost:4000');
  return (
    <div className="App">
      <ChatInput socket={socket} />
      <Feed socket={socket} />
    </div>
  );
}

export default App;
