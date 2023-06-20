import React, {Dispatch, SetStateAction, useRef} from "react";

interface Props {
    setChatRoom: Dispatch<SetStateAction<null>>
}

const ChatRoomForm = ({setChatRoom}: Props) => {

    const chatRoomInput = useRef(null)

    return (
        <div>
            <label>Enter Room</label>
            <input ref={chatRoomInput}/>
            <button onClick={() => {(chatRoomInput.current !== null) && setChatRoom(chatRoomInput.current["value"])}}>
                Let's go!
            </button>
        </div>
    );
};

export default ChatRoomForm
