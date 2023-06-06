import Message from "@/classes/chat/Message"

export default interface IChatInfo {
    messages_count: number,
    last_message: Message | null
}