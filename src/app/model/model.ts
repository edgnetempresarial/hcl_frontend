export interface State{
     id:number, 
     name?:string
}
export class User{
    constructor(public id:number,public email:string, 
        public firstName:string, 
        public lastName:string,
        public location:string,
        public stateId:number,
        public state : State,
        public password:string){}
}
export interface SoccerEvent{
    id ?:number ;
    name:string ;
    location:string,
    stateId:number,
    hostId:number,
    status?:string,
    host?:User,
    state?:State,
}
export interface SoccerEventMessage{
    eventId:number,
    event:SoccerEvent,
    user:User,
    userId:string,
    message:string,
}