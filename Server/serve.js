/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


const admins = new Set();

io.on("connection", (socket) => {

  console.log("✅ Connected:", socket.id);

  // ADMIN নিজেকে register করবে
  socket.on("register_admin", () => {
    admins.add(socket.id);
    console.log("👑 Admin registered:", socket.id);
  });


  socket.on("user_message", (data) => {
    console.log("💬 User message from:", socket.id, "→", data.text);

    if (admins.size === 0) {
      console.log("⚠️ কোনো admin connected নেই!");
    }

    admins.forEach((adminId) => {
      io.to(adminId).emit("admin_receive", {
        text: data.text,
        userId: socket.id,
        sender: "user",
      });
    });
  });


  socket.on("admin_reply", (data) => {
    console.log("📨 Admin replying to:", data.userId, "→", data.text);

    io.to(data.userId).emit("user_receive", {
      text: data.text,
      sender: "admin",
    });
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    if (admins.has(socket.id)) {
      admins.delete(socket.id);
      console.log("👑 Admin disconnected:", socket.id);
    } else {
      console.log("👤 User disconnected:", socket.id);
    }
  });

});

server.listen(5000, () => {
  console.log("🚀 Server Running On 5000");
});