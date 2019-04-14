import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormsModule,ReactiveFormsModule, NgForm} from '@angular/forms';
import { User} from '../model/user';
import {UserServiceService} from '../Services/user-service.service';





@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserServiceService) { }
  viewMode="Customer";
  showProgress:boolean=false;
  user:User = new User();
  topics:string[]=['Active-B','Active-C','Suspend-A','Suspend-B'];

  cusForm = this.fb.group({
    cusId:[this.user.customerId,Validators.required],
    internetServiceStatus:[this.user.iStatus,Validators.required],
    voiceID:[this.user.voiceid,Validators.required],
    internetId:[this.user.internetid,Validators.required],
    tvServiceStatus:[this.user.tvStatus,Validators.required],
    name:[this.user.name],
    tvId:[this.user.tvid,Validators.required],
    voiceServiceStatus:[this.user.vStatus,Validators.required]

  })

  submit(form:NgForm):void{
      this.showProgress = true;
       this.userService.createUser(this.user).subscribe(
         data =>{
           this.showProgress = false;
          alert("Data is submitted to server successfully for User Name "+this.cusForm.get('name').value);
         }
       ) 
    console.log("Data is Submitted");
    this.cusForm.reset();

  }
   
  reset(form:NgForm){
    this.cusForm.reset();
  }

  ngOnInit() {
  }

}
