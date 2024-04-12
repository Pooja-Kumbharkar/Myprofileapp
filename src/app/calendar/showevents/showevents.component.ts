import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Eventdetails } from '../users';

@Component({
  selector: 'app-showevents',
  templateUrl: './showevents.component.html',
  styleUrls: ['./showevents.component.css']
})
export class ShoweventsComponent implements OnInit {

  crNumber : string;
  updateduser : any;
  eventName : string;
  summary : string;
  details : string;
  author : string;
  startdate : string;
  enddate : string;
  cols: any[];
  host : any[];
  eventdetails= [];
  eventlist =[];
  constructor(private trackeventservice : CalendarService) {

    this.cols = [
      { field: 'CrNumber', header: 'CrNumber' },
      {field: 'EventName', header: 'EventName' },
      { field: 'Summary', header: 'Summary' },
      { field: 'Author', header: 'Author' },
      { field: 'Actions', header: 'Actions' } 
    ];

      this.trackeventservice.getUsers().subscribe((data : Eventdetails)=>{

        this.updateduser=data;
        console.log(this.updateduser);
  
        for( let user of this.updateduser)
        {
          this.eventdetails.push({crNumber :user.crNumber, EventName : user.eventName, Summary : user.summary ,Author : user.author});
         }
        
        // this.totalRecords = this.friendlist.length;
        // console.log(this.totalRecords);
       });

   }

  ngOnInit() {

    this.eventlist = this.eventdetails;
  }
}
