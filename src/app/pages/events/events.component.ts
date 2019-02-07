import { Component, OnInit } from '@angular/core';
import { User, SoccerEvent, State } from '../../model/model';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user : User;
  allevents :  Array<SoccerEvent> = [];
  states : Array<State>;
  alleventselsewhere : Array<SoccerEvent>= [];
  newEvent : SoccerEvent = {location:'', name:'' , stateId:0,hostId:0};
  constructor(private service:ServiceService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log("EventsComponent" ,  this.user);
    this.service.allstates().subscribe((response:Array<State>)=>{
      this.states = response;
    });
   }

  ngOnInit() {
    this.getAllEvents();
    this.getAllOtherEvents();
  }
  getAllEvents(){
    this.service.allEventsInUserState(this.user).subscribe((response:Array<SoccerEvent>)=>{
      this.allevents = response;
    }, error=>{
      alert(error.error.message);
    });
  }
  getAllOtherEvents(){
    this.service.allEventsNotInUserState(this.user).subscribe((response:Array<SoccerEvent>)=>{
      this.alleventselsewhere = response;
    }, error=>{
      alert(error.error.message);
    });
  }

  addEvent(){
    this.newEvent.host = this.user;
    this.newEvent.hostId = this.user.id;
    this.newEvent.state = {id:this.newEvent.stateId};
    this.service.addEvent(this.newEvent).subscribe((response:SoccerEvent)=>{
      console.log(response);
      this.getAllEvents();
      this.getAllOtherEvents();
    },error=>{alert(error.error.mesage);});
  }

  deleteEvent(id){
    this.service.deleteEvent(id).subscribe(response=>{
      this.getAllEvents();
      this.getAllOtherEvents();
    },error=>{alert(error.error.message);});
  }

}
