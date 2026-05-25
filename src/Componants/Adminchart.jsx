/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function AdminChat() {
  const [conversations, setConversations] = useState({});
  const [selectedUser, setSelectedUser] = useState("");
  const [reply, setReply] = useState("");
  const messagesEndRef = useRef(null);

  const now = () => {
    const d = new Date();
    return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  };
  useEffect(() => {
    socket.emit("register_admin");

    socket.on("admin_receive", (data) => {
      setConversations((prev) => ({
        ...prev,
        // eslint-disable-next-line react-hooks/immutability
        [data.userId]: [...(prev[data.userId] || []), { ...data, time: now() }],
      }));
      setSelectedUser((prev) => prev || data.userId);
    });

    return () => socket.off("admin_receive");
  }, []);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations, selectedUser]);

 const sendReply = () => {
  if (!reply.trim() || !selectedUser) return;

  console.log("Sending to userId:", selectedUser); // ✅ এটা দেখুন

  socket.emit("admin_reply", { text: reply, userId: selectedUser });

  setConversations((prev) => ({
    ...prev,
    [selectedUser]: [...(prev[selectedUser] || []), {
      // eslint-disable-next-line no-undef
      text: reply, sender: "admin", userId: selectedUser, time: now() 
    }],
  }));

  setReply("");
 
};
  const userIds = Object.keys(conversations);
  const currentMessages = conversations[selectedUser] || [];

  const getInitials = (id) => id.slice(-4).toUpperCase();
  // eslint-disable-next-line no-unused-vars
  


  return (
    <div style={styles.shell} className="max-w-[1440px] mx-auto">

      {/* ── SIDEBAR ── */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <p style={styles.sidebarLabel}>Admin Dashboard</p>
          <p style={styles.sidebarSub}>Live conversations</p>
        </div>

        <div style={styles.userList}>
          {userIds.length === 0 && (
            <p style={styles.emptyNote}>কোনো message আসেনি</p>
          )}
          {userIds.map((uid) => {
            const lastMsg = conversations[uid].at(-1);
            return (
              <div
                key={uid}
                onClick={() => setSelectedUser(uid)}
                style={{
                  ...styles.userItem,
                  background: selectedUser === uid ? "#fff" : "transparent",
                  border: selectedUser === uid
                    ? "0.5px solid #e0e0e0"
                    : "0.5px solid transparent",
                }}
              >
                <div style={styles.avatar}>{getInitials(uid)}</div>
                <div style={styles.userInfo}>
                  <p style={styles.userName}>{uid.slice(0, 12)}…</p>
                  <p style={styles.userPreview}>{lastMsg?.text}</p>
                </div>
                <div style={styles.onlineDot} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MAIN CHAT ── */}
      <div style={styles.main}>

        {/* Header */}
        <div style={styles.chatHeader}>
          {selectedUser ? (
            <>
              <div style={styles.avatar}>{getInitials(selectedUser)}</div>
              <div>
                <p style={styles.headerName}>{selectedUser.slice(0, 16)}…</p>
                <p style={styles.headerStatus}>● Online</p>
              </div>
            </>
          ) : (
            <p style={{ color: "#aaa", fontSize: 14 }}>
              বাম পাশ থেকে user select করুন
            </p>
          )}
        </div>

        {/* Messages */}
        <div style={styles.messages}>
          {currentMessages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.msgRow,
                justifyContent: msg.sender === "admin" ? "flex-end" : "flex-start",
              }}
            >
              {msg.sender === "user" && (
                <div style={styles.miniAv}>{getInitials(msg.userId)}</div>
              )}
              <div
                style={{
                  ...styles.bubble,
                  background: msg.sender === "admin" ? "#185FA5" : "#f0f0f0",
                  color: msg.sender === "admin" ? "#fff" : "#111",
                  borderBottomRightRadius: msg.sender === "admin" ? 4 : 14,
                  borderBottomLeftRadius: msg.sender === "user" ? 4 : 14,
                }}
              >
                {msg.text}
              </div>
        
              <span style={styles.time}>{msg.time || now()}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={styles.inputArea}>
          <div style={styles.inputWrap}>
            <input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendReply()}
              placeholder="Reply করুন..."
              style={styles.input}
            />
          </div>
          <button onClick={sendReply} style={styles.sendBtn}>
            ➤
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  shell: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
  },
  sidebar: {
    width: 220,
    borderRight: "0.5px solid #ddd",
    display: "flex",
    flexDirection: "column",
    background: "#f7f7f7",
  },
  sidebarHeader: {
    padding: "16px",
    borderBottom: "0.5px solid #ddd",
  },
  sidebarLabel: {
    fontSize: 15,
    fontWeight: 500,
    color: "#111",
  },
  sidebarSub: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  userList: {
    flex: 1,
    overflowY: "auto",
    padding: 8,
  },
  emptyNote: {
    fontSize: 12,
    color: "#bbb",
    textAlign: "center",
    marginTop: 20,
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 8,
    cursor: "pointer",
    marginBottom: 2,
    transition: "background 0.15s",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#E6F1FB",
    color: "#185FA5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 500,
    flexShrink: 0,
  },
  userInfo: { flex: 1, minWidth: 0 },
  userName: {
    fontSize: 13,
    fontWeight: 500,
    color: "#111",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  userPreview: {
    fontSize: 11,
    color: "#999",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#1D9E75",
    flexShrink: 0,
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  chatHeader: {
    padding: "14px 18px",
    borderBottom: "0.5px solid #ddd",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  headerName: { fontSize: 14, fontWeight: 500, margin: 0 },
  headerStatus: { fontSize: 12, color: "#1D9E75", margin: 0 },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  msgRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
  },
  miniAv: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#E6F1FB",
    color: "#185FA5",
    fontSize: 9,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  bubble: {
    padding: "9px 13px",
    borderRadius: 14,
    fontSize: 13,
    lineHeight: 1.5,
    maxWidth: "65%",
  },
  inputArea: {
    padding: "12px 16px",
    borderTop: "0.5px solid #ddd",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  inputWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    border: "0.5px solid #ccc",
    borderRadius: 22,
    padding: "0 14px",
    background: "#f7f7f7",
    height: 40,
  },
  input: {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: 13,
    outline: "none",
    fontFamily: "sans-serif",
  },
  sendBtn: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "#185FA5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  time: { fontSize: 10, color: "#aaa", marginTop: 3 },
};

export default AdminChat;