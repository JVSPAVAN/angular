import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  Loginform = new FormGroup({
username: new FormControl('',Validators.required),
password: new FormControl('',Validators.required)

  })

  AuthLogin() {
 if ( this.Loginform.get('username').value == "testuser" && this.Loginform.get('password').value == "testuser") {
      alert("User Logged In!")
      this.router.navigate(["create"]);
 } else {
   alert("Invalid Credentials!");
 }


  }


}
