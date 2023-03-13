import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Signup } from './signup';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username : string;
  password : string;
  url : string
  
  

  
  

 

  constructor( private http: HttpClient, private usersignup : SignupService, private router:Router) { 
    this.username="";
    this.password="";
    this.url = "http://localhost:6069/createuser";
  
   
  }

  ngOnInit(): void 
  {

      
  }

   getRandomId() {
    return Math.floor((Math.random()*6)+1);
  }

  storeData(users : { id : number ,username : string , password : string})
  {
    users.id =this.getRandomId();
    console.log(users);
    this.http.post(this.url , users)
    .subscribe((res)=>
    {
    });

    alert("Successfully signed up..");

    this.router.navigate(['/','']);
    

  }

}
