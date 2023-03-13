import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfriendService } from '../addfriend/addfriend.service';
import { Users } from '../addfriend/User';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  opened;
  updateduser : any;
  age : string;
  contactno : string;
  name : string;
  location : string;
  friendsdetails= [];
  friendlist = [];
  totalRecords : number;
  cols: any[];

  constructor( private addfriendservice : AddfriendService,private route : Router, private http : HttpClient) {
    this.opened = false;

    this.cols = [
      { field: 'name', header: 'Name' },
      {field: 'contactno', header: 'Contact' },
      { field: 'Location', header: 'Address' },
      { field: 'Age', header: 'Age' }      
      
  ];
    this.addfriendservice.getUsers().subscribe((data : Users)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      for( let user of this.updateduser)
      {
        this.friendsdetails.push({name :user.name, contactno : user.contactno, Location : user.location , age : user.age});
      }
      this.totalRecords = this.friendlist.length;
      console.log(this.totalRecords);
     });


   }

  ngOnInit(): void {
    this.friendlist = this.friendsdetails;  }


  addFriend()
  {
    console.log("Add a Friend!!")
    console.log(this.friendsdetails);
    this.route.navigate(['/', 'addfriend']);
  }

  removeFriend()
  {
    console.log("Remove a Friend!!")
    this.route.navigate(['/', 'removefriend']);
  }
}
