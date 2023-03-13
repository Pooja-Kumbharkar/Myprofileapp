import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Users } from './users';
import { UpdateserviceService } from './updateservice.service';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-updatepersonal',
  templateUrl: './updatepersonal.component.html',
  styleUrls: ['./updatepersonal.component.css']
})
export class UpdatepersonalComponent implements OnInit {

  loginuser :string;
  name : string;
  date : string;
  email : string;
  contactno : string;
  hobies : string;
  places : string;
  gender : string;
  favmovies : string;
  url : string;
  updateduser: any;
  

  opened;
  constructor( private updateservice : UpdateserviceService, private profilecomponent : ProfileComponent ,private router : Router , private http :HttpClient) {
    this.opened = false;
    this.loginuser = localStorage.getItem('username');

    this.url = "http://localhost:6069/updatepersonal";

    this.updateservice.getUsersByEmail(this.loginuser).subscribe((data : Users)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      this.name = this.updateduser.name;
      this.date = this.updateduser.date;
      this.email = this.updateduser.email;
      this.gender = this.updateduser.gender;
      this.contactno = this.updateduser.contactno;
      this.hobies = this.updateduser.hobies;
      this.places = this.updateduser.places;
      this.favmovies = this.updateduser.favmovies;

      // for( let user of this.updateduser)
      // {
      //   this.name = user.name;
      //   this.date = user.date;
      //   this.Email = user.email;
      //   this.gender = user.gender;
      //   this.contactno = user.contactno;
      //   this.hobies = user.hobies;
      //   this.places = user.places;
      //   this.gender = user.gender;
      //   this.favmovies = user.favmovies ;
      // }
     });

   }

  ngOnInit(): void {
  }

  getRandomId() {
    return Math.floor((Math.random()*6)+1);
  }

  storeData(users)
  {
    console.log(users);
    this.http.put<any>(this.url , users)
    .subscribe((res)=>
    {
    });

    alert("Profile Updated!!");


    this.profilecomponent.dispUpdatedDetails();
    this.router.navigate(['/','profile']);
    

  }

}
