import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, SoccerEvent } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  path:string = "/app"

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    return this.http.get(this.path + '/login?email=' + email  + "&password=" +  password);
  }

  allstates(){
    return this.http.get(this.path + '/allstates');
  }

  register(user:User){
    return this.http.post(this.path + '/register',user);
  }
  addEvent(event:SoccerEvent){
    return this.http.post(this.path + '/addevent', event);
  }
  deleteEvent(id:number){
    return this.http.post(this.path + '/delevent', id);
  }
  allEventsInUserState(user:User){
    return this.http.get(this.path + '/allevents/' + user.state);
  }
  allEventsNotInUserState(user:User){
    return this.http.get(this.path + '/alleventsoff/' + user.state);
  }

  getEvent(idEvent:number){
    return this.http.get(this.path  + '/event/' +  idEvent);
  }
  getEventMessages(idEvent:number){
    return this.http.get(this.path  + '/eventMessages2/' +  idEvent);
  }
  addEventMessage(eventId:number, userId:number,message:string ){
    return this.http.post(this.path  + '/addEventMessage/' + eventId + "/" +  userId, message);
  }

  getEventMembers(eventId:number){
    return this.http.get(this.path +  '/eventMembers/' +  eventId);
  }
}
