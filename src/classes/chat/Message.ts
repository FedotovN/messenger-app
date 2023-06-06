import { Timestamp } from "firebase/firestore";
import ReadStatus from '@/enums/ReadStatus'
export default class Message {
    constructor(
        readonly created_at: Timestamp | null,
        public sended_at: Date,
        readonly sended_by_uid: string,
        readonly sended_by_name: string,
        readonly sended_by_photo_url: string,
        public content: string,
        public readStatus: ReadStatus,
        public isOverwritten: boolean
    ){}
}