import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../addfriend/User';
// import { FriendDetails } from './FriendDetails';
@Injectable({
  providedIn: 'root'
})
export class RemovefriendService {
  private url = "http://localhost:6069/getfrienddetials";
  constructor(private http : HttpClient) { }

  
  getUsers() : Observable<Users>{
 
    return this.http.get<Users>(this.url)
}

}
