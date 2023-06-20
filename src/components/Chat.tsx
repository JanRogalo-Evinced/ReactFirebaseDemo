import React, {Dispatch, SetStateAction, useRef} from "react";

interface Props {
   chatRoom: string | null
}

const ChatRoomForm = ({chatRoom}: Props) => {

    return (
        <div>
       <h1>chat! in {chatRoom}</h1>
        </div>
    );
};

export default ChatRoomForm
