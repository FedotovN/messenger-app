export default class Contact{
    constructor(
        readonly name: string,
        readonly uid: string,
        readonly photoURL: string,
        readonly bio: string,
        readonly email: string,
        readonly room_hash: string
    ){}
}