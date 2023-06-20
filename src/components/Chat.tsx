import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from "firebase/firestore"
import {auth, db} from "../../firebaseConfig";
import {MessageModel} from "../types/message.model";

interface Props {
    chatRoom: string | null
}

const Chat = ({chatRoom}: Props) => {
    const [storedMessages, setStoredMessages] = useState<MessageModel[] | null>(null);
    const [message, setMessage] = useState("");
    const docRef = collection(db, 'messages')

    useEffect(() => {
        const queryMessages = query(docRef, where("room", '==', chatRoom), orderBy("createdAt"));
        const unsubsrcibe = onSnapshot(queryMessages, (snapshot) => {

            let storedMessages: MessageModel[] = [];
            snapshot.forEach((doc) => {
                storedMessages.push({...doc.data(), id: doc.id} as MessageModel)
            })
            setStoredMessages(storedMessages);
        })
        return () => unsubsrcibe();
    }, [])


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message === "") return;
        await addDoc(docRef, {
            text: message,
            createdAt: serverTimestamp(),
            userName: auth.currentUser?.displayName,
            room: chatRoom,
        })
        setMessage('')
    }

    return (
        <div>
            <h1>chat in {chatRoom}</h1>
            <div>
                {storedMessages?.map(message =>
                    <div key={message.id}>
                        <p>{message.userName}: {message.text}</p>
                    </div>)}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder={'type here...'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setMessage(e.target.value)
                    }}
                    value={message}
                />
                <button type="submit">Send!</button>
            </form>
        </div>
    );
};

export default Chat
