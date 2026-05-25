import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "আস্সালামু আলাইকুম! আমাদের OREBI SHOP-এ স্বাগতম। কিভাবে সাহায্য করতে পারি?", sender: "admin" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    socket.on("user_receive", (data) => {
      setIsTyping(false);
      // eslint-disable-next-line react-hooks/immutability
      setMessages((prev) => [...prev, { text: data.text, sender: "admin", time:now() }]);
    });
    return () => socket.off("user_receive");
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const now = () => {
    const d = new Date();
    return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit("user_message", { text: message });
    setMessages((prev) => [...prev, { text: message, sender: "user", time: now() }]);
    setMessage("");
  };

  return (
    <div style={s.shell} className="max-w-[1440px] mx-auto">

      {/* Header */}
      <div style={s.header}>
        <div style={s.av}>OR</div>
        <div style={{ flex: 1 }}>
          <p style={s.hName}>OREBI SHOP</p>
          <p style={s.hStatus}>● Online </p>
        </div>
      </div>

      {/* Messages */}
      <div style={s.msgs}>
        <p style={s.day}>আজকে</p>

        {messages.map((msg, i) => (
          <div key={i} style={{ ...s.row, justifyContent: msg.sender === "user" ? "flex-end" : "flex-start" }}>
            {msg.sender === "admin" && <div style={s.miniAv}>SU</div>}
            <div style={{ display: "flex", flexDirection: "column", alignItems: msg.sender === "user" ? "flex-end" : "flex-start", maxWidth: "72%" }}>
              <div style={{
                ...s.bub,
                background: msg.sender === "user" ? "#0F6E56" : "#f5f5f5",
                color: msg.sender === "user" ? "#fff" : "inherit",
                border: msg.sender === "admin" ? "0.5px solid #e0e0e0" : "none",
                borderBottomLeftRadius: msg.sender === "admin" ? 4 : 16,
                borderBottomRightRadius: msg.sender === "user" ? 4 : 16,
              }}>
                {msg.text}
              </div>
              <span style={s.time}>{msg.time || now()}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ ...s.row, justifyContent: "flex-start" }}>
            <div style={s.miniAv}>SU</div>
            <div style={s.typingBub}>
              {[0, 200, 400].map((d, i) => (
                <span key={i} style={{ ...s.dot, animationDelay: `${d}ms` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div style={s.inputArea}>
        <div style={s.inputWrap}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Message লিখুন..."
            style={s.input}
          />
        </div>
        <button onClick={sendMessage} style={s.sendBtn}>➤</button>
      </div>

      <style>{`@keyframes bonce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}`}</style>
    </div>
  );
}

const s = {
  shell: { display: "flex", flexDirection: "column", height: "100vh", fontFamily: "sans-serif", background: "#fff" },
  header: { background: "#0F6E56", padding: "14px 16px", display: "flex", alignItems: "center", gap: 11 },
  av: { width: 40, height: 40, borderRadius: "50%", background: "#5DCAA5", color: "#04342C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, flexShrink: 0 },
  hName: { fontSize: 14, fontWeight: 500, color: "#fff", margin: 0 },
  hStatus: { fontSize: 11, color: "#9FE1CB", margin: 0 },
  msgs: { flex: 1, overflowY: "auto", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10 },
  day: { textAlign: "center", fontSize: 11, color: "#aaa", margin: "4px 0" },
  row: { display: "flex", alignItems: "flex-end", gap: 7 },
  miniAv: { width: 28, height: 28, borderRadius: "50%", background: "#E1F5EE", color: "#085041", fontSize: 10, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  bub: { padding: "9px 13px", borderRadius: 16, fontSize: 13, lineHeight: 1.5, wordBreak: "break-word" },
  time: { fontSize: 10, color: "#aaa", marginTop: 3 },
  typingBub: { display: "flex", alignItems: "center", gap: 4, padding: "10px 14px", background: "#f5f5f5", border: "0.5px solid #e0e0e0", borderRadius: 16, borderBottomLeftRadius: 4 },
  dot: { display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#aaa", animation: "bonce 1.1s infinite" },
  inputArea: { padding: "10px 12px", borderTop: "0.5px solid #e0e0e0", display: "flex", gap: 8, alignItems: "center" },
  inputWrap: { flex: 1, display: "flex", alignItems: "center", border: "0.5px solid #ccc", borderRadius: 22, padding: "0 14px", height: 40, background: "#f7f7f7" },
  input: { flex: 1, border: "none", background: "transparent", fontSize: 13, outline: "none", fontFamily: "sans-serif" },
  sendBtn: { width: 40, height: 40, borderRadius: "50%", background: "#0F6E56", color: "#fff", border: "none", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" },
};

export default Chat;