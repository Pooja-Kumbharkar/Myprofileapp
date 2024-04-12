import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Eventdetails } from './users';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class CalendarService {

 loginuser : String;

  private url ="http://localhost:6069/getevents";
  constructor(private http : HttpClient) {
    this.loginuser = localStorage.getItem('username');

   }

   
  storeData(users : Object)
  {
   
    this.http.post("http://localhost:6069/setevents", users)
    .subscribe((res)=>
    {
    });
    console.log("EVent Stored")
  }

  getUsers() : Observable<Eventdetails>{
 
    return this.http.get<Eventdetails>(this.url )
}

 
}

