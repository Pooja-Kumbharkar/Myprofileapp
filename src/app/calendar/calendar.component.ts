import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './calendar.service';
import { MenuItem, MessageService} from "primeng/api";
import { Calendartaskcomponent } from './calendartask.component';
  

@Component({
    selector: "app-root",
    templateUrl: 'calendar.component.html',
    providers: [MessageService]
})
export class Calendarcomponent implements OnInit {
  opened;
  loginuser :string;
  updateduser : any;
  displayBasic : boolean;
  crNumber : string;
  eventName : string;
  summary : string;
  details : string;
  author : string;
  timerange : string;
	startdate : string;
	enddate : string;
  host : string;
  hostdetails : any[] =[];
  calendartask : Calendartaskcomponent;
  
  constructor( private messageService: MessageService, private calendarservice : CalendarService ,private router : Router ) { 
    this.loginuser = localStorage.getItem('username');
    this.opened = false;
    
  }

    ngOnInit(): void {
      
    }

    showDialog(){
      this.displayBasic = true;

    }

    storeData(users)
    {
      this.hostdetails.push(users.host);
      this.calendartask = new Calendartaskcomponent(this.crNumber , this.eventName , this.summary , this.details , this.author , this.timerange , this.startdate , this.enddate , this.hostdetails)
     this.calendarservice.storeData(this.calendartask);
    }
    
    

   

}