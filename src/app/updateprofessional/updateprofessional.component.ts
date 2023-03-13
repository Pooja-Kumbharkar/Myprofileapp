import { Component, OnInit } from '@angular/core';
import {User} from './users';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { UpdateprofessionalService } from './updateprofessional.service';
import { UpdatepersonalComponent } from '../updatepersonal/updatepersonal.component';

@Component({
  selector: 'app-updateprofessional',
  templateUrl: './updateprofessional.component.html',
  styleUrls: ['./updateprofessional.component.css']
})
export class UpdateprofessionalComponent implements OnInit {

  opened;
  name : string;
  gender : string;
  qualification : string;
  jobrole : string;
  contactno : string;
  email : string;
  otherskills : string;
  technologies : string;
  experience : string;
  url : string;
  updateduser: any;
  loginuser : string;
  


  constructor( private updateprofessionalservice : UpdateprofessionalService,private updatepersonal : UpdatepersonalComponent ,private profilecomponent : ProfileComponent ,private router : Router , private http :HttpClient) {
    this.opened = false;
    this.url = "http://localhost:6069/updateprofessional";
    this.loginuser = localStorage.getItem('username');

    this.updateprofessionalservice.getUsersByEmail(this.loginuser).subscribe((data : User)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      this.name = this.updateduser.name;
      this.gender = this.updateduser.gender;
      this.qualification = this.updateduser.qualification;
      this.jobrole = this.updateduser.jobrole;
      this.contactno = this.updateduser.contactno;
      this.email = this.updateduser.email;
      this.otherskills = this.updateduser.otherskills;
      this.technologies = this.updateduser.technologies;
      this.experience = this.updateduser.experience;

  
     });



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

  ngOnInit(): void {
  }

}
