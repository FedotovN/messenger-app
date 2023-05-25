import { Timestamp } from "firebase/firestore";
import ReadStatus from '@/enums/ReadStatus'
export default class Message {
    constructor(
        readonly created_at: Timestamp,
        public sended_at: Date,
        readonly sended_by_uid: string,
        public content: any,
        public readStatus: ReadStatus,
        public isWritten: boolean,
    ){}
}