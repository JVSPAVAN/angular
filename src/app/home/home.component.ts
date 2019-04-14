import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router:Router){}
  Username:string;
  Password:string;

  title = 'Super Human Front End';
  greeting = 'Welcome !';

  
 login():void{
   if(this.Username == 'testuser' && this.Password == 'testuser'){
     alert("user logged in");
     this.router.navigate(["create"]);
   }else{
     alert("invalid credentials");
   }
 }

}
