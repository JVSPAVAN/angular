import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  private userUrl ='/user';

  public createUser(user:User){
  return  this.http.post<User>(this.userUrl,user);
  }
}
