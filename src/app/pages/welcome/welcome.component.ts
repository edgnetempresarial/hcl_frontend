import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { State, User } from '../../model/model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  email:string;
  password:string;
  states : Array<State>;
  state:any;
  user : User = new User(1,'','','','',1,null,'');

  constructor(private service : ServiceService, 
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.allstates();
  }

  allstates(){
    this.service.allstates().subscribe((response:Array<State>)=>{
      this.states = response;
    });
  }
  login(){
    console.log("login",this.email, this.password);
    this.service.login(this.email,this.password).subscribe((response)=>{
      if(response==null){
        alert("Wrong User/Password");
      }else{
        localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['events']);
      }
      
    },error=>{alert(error.error.message);});
  }
  register(){
    this.service.register(this.user).subscribe((response)=>{
        alert("User Registered");
    }, (error) =>{
      alert(error.error.message);
    });
  }
}
