import Message from "@/classes/chat/Message"

export default interface IChatInfo {
    messages: Message[],
    hash: string,
    last_message?: Message
}