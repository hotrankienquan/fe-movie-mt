import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:7000");
const ChatPage = () => {
  let [mess, setMess] = useState("");
  const [username, setUsername] = useState("");
  let [listMessage, setListMessage] = useState([]);
  const handleSend = async () => {
    console.log("tin nhắn", mess);
    if (mess !== "") {
      const messageData = {
        author: username,
        message: mess,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setListMessage((list) => [...list, messageData]);
      setMess("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setListMessage((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div>
      <div className="w-[900px] mx-auto border border-red-300">
        <input
          type="text"
          placeholder="người gửi..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nhắn gì đó...."
          value={mess}
          onChange={(e) => setMess(e.target.value)}
        />
        <button className="border border-blue-300 p-2" onClick={handleSend}>
          Gửi tin nhắn
        </button>
      </div>
      <div>
        <h3>List tin nhắn</h3>
        <div>
          show tin nhắn ở đây
          {listMessage?.map((mess) => {
            return <div>{mess.message}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
