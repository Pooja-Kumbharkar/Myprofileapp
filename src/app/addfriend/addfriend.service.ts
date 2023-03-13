import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from './User'
@Injectable({
  providedIn: 'root'
})
export class AddfriendService {
  loginuser : string;
  private url = "http://localhost:6069/getfrienddetials";
  constructor(private http : HttpClient , ) 
  {
    this.loginuser = localStorage.getItem('username');

  }

   getUsers() : Observable<Users>{
 
    return this.http.get<Users>(this.url +"/" +this.loginuser)
}



}

