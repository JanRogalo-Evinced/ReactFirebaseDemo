import React, {useState} from "react";
import ChatRoomForm from "./ChatRoomForm";
import Chat from "./Chat";

const Chatroom = () => {
    const [chatRoom, setChatRoom] = useState(null)

    return (
        <div>
            {chatRoom ? <Chat chatRoom={chatRoom}/> : <ChatRoomForm setChatRoom={setChatRoom}/>}
        </div>
    );
};

export default Chatroom;
