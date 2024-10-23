import { useState } from "react";
import "./App.css";

function App() {
  const[textGreeting, setTextGreeting] = useState("Greeting")
  return (
    <div className="App">
      <div className="greeting-container">{textGreeting}</div>
      <div className="buttons">
        <button onClick={()=>setTextGreeting("สวัสดี!")} >สวัสดี!</button>
        <button onClick={()=>setTextGreeting("Hi!")} >Hi!</button>
        <button onClick={()=>setTextGreeting("你好!")} >你好!</button>
      </div>
    </div>
  );
}

export default App;
