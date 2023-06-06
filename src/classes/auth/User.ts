import Contact from "../chat/Contact";

export default class User {
    constructor(
        public name: string, 
        public uid: string,
        public photoURL: string,
        public bio: string,
        public email: string,
        public contacts: Contact[] = []
    ){}
}