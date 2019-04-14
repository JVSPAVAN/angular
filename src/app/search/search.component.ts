import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormsModule,ReactiveFormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  topics:string[]=['Active-A','Active-B','Suspend-A','Suspend-B'];

  searchForm = this.fb.group({
    cusId:['',Validators.required],
    cusName:['',Validators.required],
    voiceId:[''],
    internalId:[''],
    tvServiceStatus:[''],
    name:[''],
    tvId:[''],
    voiceServiceStatus:['']
  })

  editForm = this.fb.group({
    cusEditId:[12345],
    internetServiceEditStatus:[],
    voiceEditID:[],
    internetEditId:[],
    tvServiceEditStatus:[],
    nameEdit:[],
    tvEditId:[],
    voiceServiceEditStatus:[],

  })

  ngOnInit() {
  }

}
