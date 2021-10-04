import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={name} src={profilePic} />
        <div className="chat_info">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
