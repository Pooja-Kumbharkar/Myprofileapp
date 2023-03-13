import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = "http://localhost:6069/getusers";


  constructor(private http:HttpClient) {}


  getUsers() : Observable<Signup>{
 
      return this.http.get<Signup>(this.url)
  }


}
