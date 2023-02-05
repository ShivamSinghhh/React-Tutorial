import React, { useState, useEffect } from "react";
import { users } from "../utils/chat";
import createConnection from "../utils/chat";
import Contacts from "./Contacts";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [subscribedTo, setSubscribedTo] = useState(users[0]);
  // const [active,setActive] = useState(subscribeTo)
  // subscibeTo current user
  // const connection = createConnection(currentUser)
  // Listen(callback)
  // the callback will be given any new messages;
  // so you can write Listen(message => {your code..})
  // you need to ensure you are unsubscribing from user1 to user2 as well
  // display all the changes to the UI
  // when changing user , meassage should be reset
  useEffect(() => {
    const {Listen,unsubscribe} = createConnection(subscribedTo);
  
    Listen((message) => {
      console.log(message);
      setMessages((prev) => [...prev, message]);
    });

    const cleanUpFunction = ()=>{    
       unsubscribe();
       setMessages([])
       console.log("cleanUp function called")
    }
    return cleanUpFunction;
  }, [subscribedTo]);
 // console.log("subscribedTo", subscribedTo.name);

  return (
    <div>
      <h1>Contacts</h1>
      <Contacts
        // all users
        users={users}
        // active user
        active={subscribedTo}
        // onChange
        onChange={(user) => setSubscribedTo(user)}
        //   setActive(user);
      />
      <hr />
      {messages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
export default ChatApp;
