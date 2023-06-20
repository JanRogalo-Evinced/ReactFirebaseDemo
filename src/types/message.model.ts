export interface MessageModel {
    text: string;
    createdAt: {
        nanoseconds: number,
        seconds: number
    }
    userName: string;
    chatroom: string;
    id: string;
}