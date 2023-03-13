import { Component, OnInit } from '@angular/core';
import { RemovefriendService } from './removefriend.service';
import{HttpClient} from '@angular/common/http';
import { Users } from '../addfriend/User';
import { AddfriendService } from '../addfriend/addfriend.service';


@Component({
  selector: 'app-removefriend',
  templateUrl: './removefriend.component.html',
  styleUrls: ['./removefriend.component.css']
})


export class RemovefriendComponent implements OnInit {

  opened;
  name : string;
  birthdate : string;
  age : string;
  contactno : string;
  hobies : string;
  places : string;
  favmovies : string;
  url : string;
  deleteuser: any;
  location : string;
  agedetails : any;
  userdata : any;

 
  
  constructor (private addfriendservice : AddfriendService, private http : HttpClient)
{
  this.opened = false;
  this.url = "http://localhost:6069/removefriend";

}

  ngOnInit(): void {
  }

  DeleteData(users){

    
    this.addfriendservice.getUsers().subscribe((data : Users)=>{

      this.userdata=data;
      console.log(this.userdata);

      for(let removefriend of this.userdata)
      {
        if(removefriend.name == users.name)
        {
          console.log(removefriend);
          this.http.request('delete', this.url, { body: removefriend }) .subscribe((res)=>
          {
            console.log(res)
          });
        }

      }
      alert(this.name + " "+"is removed")

});
}
}


