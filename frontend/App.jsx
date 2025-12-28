import { useState, useRef, useEffect } from "react";
import "./App.css"
import {FaPaperPlane} from "react-icons/fa";
function App(){
  const[message,setMessage]=useState("");
  const[messages,setMessages]=useState([]);
  const[loading,setLoading]=useState(false);
  const chatboxRef=useRef(null);        //This lets React control the chatbox scroll position.

  useEffect(()=>{
    chatboxRef.current.scrollTop=chatboxRef.current.scrollHeight;
  }, [messages]);

  const sendMessage=async()=>{
    if(!message.trim()){
      return;
    }
    const userMsg={text: message, sender: "user"};
    setMessages((prev)=>[...prev,userMsg]);
    setMessage("");
    setLoading(true);

    try{
      const response=await fetch("http://127.0.0.1:8000/chat",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({message}),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.reply, sender: "bot" },
      ]);


    }  

        
    catch(error){
      setMessages((prev)=>[
        ...prev,
        { text: "Error connecting to server", sender:"bot"},
      ]);

    }
    finally{
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <header className="chat-header">
        <h3>Talker Bot</h3>
      </header>

      <div className="chatbox" ref={chatboxRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.sender === "bot" ? (
              <div className="text-bubble">{msg.text}</div>
            ) : (
              <span className="text-bubble">{msg.text}</span>
            )}
          </div>
        ))}
   
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
export default App;