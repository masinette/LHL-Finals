import React from "react";
// import MessagesListItem from "components/MessagesListItem";


// pass in props, assign value of map from messages
export default function MessagesList(props) {

  const MessagesList = props.messages.map(message => {
    // return (
    //   // <MessagesListItem
    //   //   key={messages.id}
    //   //   // name={}
        
    //   // />
    // );
  });

  
  return (
    <section>
      <h4> Messages</h4>
      <ul>{ MessagesList }</ul>
    </section>
  )
}
