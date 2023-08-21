export  class Messages{
    message : string;
    self : boolean;
    createdAt: Date;

    constructor(message : string , self : boolean ){
        this.message = message;
        this.self = self;
        this.createdAt = new Date();

    }
}