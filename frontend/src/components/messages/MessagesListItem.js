import React from "react";
import "./messages.css";

export default function MessagesListItem(props) {

  const formatMessages = (props) => {
    if (props === 0) {
      return "no messages";
    } else {
      return `Here are your messages: ${props.messages}`;
    }
  };

  return (
    <li>
      <h2>Messages {props.message}</h2>
    </li>
  );
}
