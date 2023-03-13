import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './users';


@Injectable({
  providedIn: 'root'
})
export class UpdateprofessionalService {
  flag : boolean = false;
  private url = "http://localhost:6069/getupdatedprofessionalusers";
  private urlemail = "http://localhost:6069/getprofessionaluserbyemail";
  private inserturl = "http://localhost:6069/insertprofessionalusers";
  constructor(private http : HttpClient ) 
  {

   

  }

  getRandomId() {
    return Math.floor((Math.random()*100)+1);
  }

getUsers() : Observable<User>{
 
    return this.http.get<User>(this.url)
}


getUsersByEmail(email : String) : Observable<User>{
 
  return this.http.get<User>(this.urlemail + "/" +email);
}

storeData(users)
{
  users.id =this.getRandomId();
  this.http.post(this.inserturl , users)
  .subscribe((res)=>
  {
  });
  alert("Profile added")

}

}
