import { Messages } from "./message.model";
export class ChatBox{
    id !: string;
    name : string;
    messages :Messages [];
    createdAt : Date;
    lastModified:Date;
    recentActivity : string;

    constructor(name : string){
        this.name = name
        this.messages =[];
        this.createdAt = new Date();
        this.lastModified = this.createdAt;
        this.recentActivity = 'This group was created on '+new Date().toDateString();

    }
}
