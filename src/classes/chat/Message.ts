import { Timestamp } from "firebase/firestore";
import ReadStatus from '@/enums/ReadStatus'
export default class Message {
    constructor(
        readonly id: string,
        readonly created_at: Timestamp | Date | null,
        public sended_at: Date | string,
        readonly sended_by_uid: string,
        readonly sended_by_name: string,
        readonly sended_by_photo_url: string,
        public content: string,
        public read_status: ReadStatus
    ){}
}