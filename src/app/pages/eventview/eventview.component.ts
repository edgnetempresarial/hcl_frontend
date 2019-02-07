import { Component, OnInit } from '@angular/core';
import { SoccerEvent, SoccerEventMessage, User } from '../../model/model';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.component.html',
  styleUrls: ['./eventview.component.css']
})
export class EventviewComponent implements OnInit {
  event:SoccerEvent ;
  user:User;
  messages:Array<any>;
  members:Array<any> = [];
  newMessage:string;
  constructor(private activateRoute:ActivatedRoute, private service:ServiceService) { 
     this.user = JSON.parse(localStorage.getItem('user'));
     
    activateRoute.params.subscribe(params=>{
      this.service.getEvent(params['id']).subscribe((response:SoccerEvent)=>{
        this.event = response;
        this.getEventMessages(this.event.id);
        this.getEventMembers(this.event.id);
      });
    });
  }

  getEventMessages(id:any){
    this.service.getEventMessages(id).subscribe((response2:Array<any>)=>{
        this.messages = response2;
      });
  }
  getEventMembers(id:any){
    this.service.getEventMembers(id).subscribe((response:Array<any>)=>{
      this.members = response;
    },error=>{alert(error.error.message);});
  }
  ngOnInit() {
  }
  formatDate(dateSQL) {
    let date = new Date(dateSQL);
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return monthNames[monthIndex] +  ' ' + day + ' ,' + year;
  }
  submitMessage(){
    this.service.addEventMessage(this.event.id,this.user.id, this.newMessage).subscribe((response)=>{
      console.log(response);
      this.getEventMessages(this.event.id);
      this.newMessage="";
    },error=>{alert(error.error.message);});
  }
}
