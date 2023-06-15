import Message from "@/classes/chat/Message"

export default interface IRoomInfo {
    messages: Message[],
    hash: string,
}