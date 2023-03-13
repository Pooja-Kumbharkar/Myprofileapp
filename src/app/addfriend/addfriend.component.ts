import { Component, OnInit } from '@angular/core';
import { AddfriendService } from './addfriend.service';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { Users } from './User';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  opened;
  loginuser : string;
  email : string;
  name : string;
  birthdate : string;
  age : string;
  contactno : string;
  hobies : string;
  places : string;
  favmovies : string;
  url : string;
  updateduser: any;
  location : string;
  qualification : string;
  friendsdetails : any[] = [];

  constructor( private addfriendservice : AddfriendService, private router : Router , private http :HttpClient) {
    this.opened = false;
    this.loginuser = localStorage.getItem('username');
    this.url = "http://localhost:6069/updatefrienddetails";
    
    console.log(this.friendsdetails);
  
   }

  ngOnInit(): void {
  }

  getRandomId() {
    return Math.floor((Math.random()*100)+1);
  }

  storeData(users)
  {
    users.id = this.email;
    users.parentemail = this.loginuser;
    // this.friendsdetails.push({"id" : this.loginuser});
    // this.friendsdetails.push({"name" : users.name});
    console.log(this.friendsdetails);
    this.http.post(this.url ,users)
    .subscribe((res)=>
    {
    });

    alert("Profile Updated!!");

    this.addfriendservice.getUsers().subscribe((data : Users)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      for( let user of this.updateduser)
      {
        this.name = user.name;
        this.birthdate = user.date;
        this.age = user.age;
        this.contactno = user.contactno;
        this.email = user.email;
        this.hobies = user.hobies;
        this.places = user.places;
        this.favmovies = user.favmovies ;
        this.location = user.location;
        this.qualification = user.qualification;

      }
     });
    this.router.navigate(['/','friendlist']);  

  }

  

}

