import { Component, OnInit } from '@angular/core';
import { AddfriendService } from '../addfriend/addfriend.service';
import{HttpClient} from '@angular/common/http';
import { Users } from '../addfriend/User';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  dataSource: Object;// pieobject
  dataSource1: Object; // Mapobject
  title: string;
  age : string;
  agedetails1 = [];
  location : string;
  updateduser: any;
  valuestring : string = "22";
  cnt1 = 0;
  cnt2 = 0;
  cnt3 = 0;
  loccnt1 = 0;
  loccnt2 = 0;
  loccnt3 = 0;
  loccnt4 = 0;
  qcnt1 = 0;
  qcnt2 = 0;
  qcnt3 = 0;
  qcnt4 = 0;
  qualification : string;


  constructor(private addfriendservice : AddfriendService,private http :HttpClient) {
    this.addfriendservice.getUsers().subscribe((data : Users)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      for( let user of this.updateduser)
      {
        this.age = user.age;
        this.location = user.location;
        this.qualification = user.qualification;
        console.log("Location =" +user.location);

        if(+user.age>=18 && +user.age<=22 )
        {
          this.cnt1 = this.cnt1 + 1;
  
        }
        else if(+user.age>22 && +user.age<=27)
          {
  
            this.cnt2 = this.cnt2 + 1 ;
          }

          else if(+user.age>27&& +user.age<=32)
          {
  
            this.cnt3= this.cnt3 + 1 ;
          }

        if(user.location=="Maharashtra")
        {
          this.loccnt1 = this.loccnt1 + 1;
          
        }
  
        else if(user.location=="Uttarpradesh")
            {
              this.loccnt2 = this.loccnt2 + 1;
              
            }

        else if(user.location=="Tamilnadu")
            {
              this.loccnt3 = this.loccnt3 + 1;
              
            }
       else if(user.location=="Assam")
            {
              this.loccnt4 = this.loccnt4 + 1;
              
            }
            else{
              continue;
              }
        
        
      }
      console.log("18-22 cnt " +this.cnt1);
      console.log("23-27 cnt " +this.cnt2);
      console.log("28-32 cnt " +this.cnt3);

      console.log("Maharasahtra cnt " +this.loccnt1);
      console.log("Uttarpradesh cnt " +this.loccnt2);
      console.log("Tamilnadu cnt " +this.loccnt3);
      console.log("Assam cnt " +this.loccnt4);



      this.agedetails1.push({label : "18-22" , value : +this.cnt1});
      this.agedetails1.push({label : "23-27" , value : +this.cnt2});
      this.agedetails1.push({label : "28-32" , value : +this.cnt3});


      this.dataSource = {
        "chart": {
          "caption": "Friends Categories",
          "subCaption": "By Age",
          "numberPrefix": "$",
          "bgColor": "#ffffff",
          "startingAngle": "310",
          "showLegend": "1",
          "defaultCenterLabel": "Friends Category",
          // "centerLabel": "Revenue from $label: $value",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "theme": "fusion"
      },
      "data": [   
          {
              "label": this.agedetails1[0].label,
              "value": Math.floor (this.agedetails1[0].value / 3 * 100)
          },
          {
              "label": this.agedetails1[1].label,
              "value": Math.floor (this.agedetails1[1].value / 3 * 100)
          },
          {
              "label": this.agedetails1[2].label,
              "value": Math.floor (this.agedetails1[2].value / 3 * 100)
          },
          
      ]
      };

      this.dataSource1 ={
        "chart": {
            "caption": "Location of Friends",
            "subcaption": " States in India",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
          },
          "colorrange": {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [
    
              {
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
              },
              {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
              },
              {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#E65100"
              }
            ]
          },
          "data": [{
              "id": "021",
              "value": this.loccnt1,
              "showLabel": "1"
    
            },
            {
              "id": "033",
              "value": this.loccnt2,
              "showLabel": "1"
            },
            {
                "id": "004",
                "value": this.loccnt4,
                "showLabel": "1"
            },
            {
                "id": "031",
                "value": this.loccnt3,
                "showLabel": "1"
            },
        
        ]

      }

    });
  }

  ngOnInit(): void {

    
  }
}
