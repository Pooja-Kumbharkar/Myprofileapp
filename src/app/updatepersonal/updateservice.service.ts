import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from './users';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  flag : boolean = false;
  private url = "http://localhost:6069/getupdatedusers";
  private urlemail = "http://localhost:6069/getuserbyemail";
  private inserturl = "http://localhost:6069/insertusers";
  constructor(private http : HttpClient ) 
  {

   

  }

  getRandomId() {
    return Math.floor((Math.random()*100)+1);
  }

getUsers() : Observable<Users>{
 
    return this.http.get<Users>(this.url)
}

getUsersByEmail(email : String) : Observable<Users>{
 
  return this.http.get<Users>(this.urlemail + "/" +email);
}

storeData(users)
{
  users.id =this.getRandomId();
  this.http.post(this.inserturl , users)
  .subscribe((res)=>
  {
  });
  alert ("Profile added")
}

}
