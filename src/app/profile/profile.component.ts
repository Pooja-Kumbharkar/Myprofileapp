import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../updatepersonal/users';
import { User} from '../updateprofessional/users';
import { UpdateserviceService } from '../updatepersonal/updateservice.service';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UpdateprofessionalService } from '../updateprofessional/updateprofessional.service';
import { LoginUser } from '../common/util/loginusers';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isPersonal ; 
  isProfessional ;
  isPersonalUpdate;
  opened;
  updateduser : any;
  id: number;
  name : string;
  date : Date;
  Email : string;
  contactno : string;
  hobies : string;
  places : string;
  favmovies : string;
  gender : string;
  loginuser : string;
  qualification : string;
  jobrole : string;
  email : string;
  otherskills : string;
  technologies : string;
  experience : string;
  flag : boolean = false ;



  constructor( private updateprofessionalservice : UpdateprofessionalService,private router : Router,private logincomponent : LoginComponent, private updateservice : UpdateserviceService) { 
    this.opened = false;
    this.isPersonal = false; 
    this.isProfessional = false;
    this.isPersonalUpdate = false;
    this.loginuser = localStorage.getItem('username');

    this.updateprofessionalservice.getUsersByEmail(this.loginuser).subscribe((data : User)=>{

      this.updateduser = data;

      this.gender = this.updateduser.gender;
      this.qualification = this.updateduser.qualification;
      this.email = this.updateduser.email;
      this.jobrole = this.updateduser.jobrole ;
      this.otherskills =  this.updateduser.otherskills;
      this.email = this.updateduser.email;
      this.technologies = this.updateduser.technologies;
      this.experience = this.updateduser.experience;
    });

    this.updateservice.getUsersByEmail(this.loginuser).subscribe((data : Users)=>{

      this.updateduser = data;
      console.log(this.updateduser);
      

      this.name = this.updateduser.name;
      this.date= this.updateduser.date;
      this.Email = this.updateduser.email;
      this.gender = this.updateduser.gender;
      this.contactno = this.updateduser.contactno;
      this.hobies = this.updateduser.hobies;
      this.places = this.updateduser.places;
      this.favmovies = this.updateduser.favmovies;
      console.log(this.date);
     

       
    if (this.loginuser == this.Email)
    {
      this.flag = true;
    }

    else { this.flag = false;}
    console.log(this.flag);
     });
  }

  ngOnInit(): void {

    this.isPersonal = false; 
    this.isProfessional = false;
    this.isPersonalUpdate = false;
    this.dispUpdatedDetails();
  }

  togglePersonal() {  
    this.isPersonal = true;  
    this.isProfessional = false;
  }  

  toggleProfessional()
  {
    this.isProfessional = true;
    this.isPersonal = false;
  }

  insertDetails(users)
  {
    console.log(users);
    this.updateservice.storeData(users);

  }

  insertProfessionalDetails(userdata)
  {
    console.log(userdata);
    this.updateprofessionalservice.storeData(userdata); 
  }

  updateDetails ()
  {
    if (this.isPersonal && !this.isProfessional || !this.isPersonal && !this.isProfessional)
    {
      this.updatePersonal();
    }

    else if (this.isProfessional && !this.isPersonal )
    {
      this.updateProfessional();
    }
  }
  updatePersonal()
  {
    
    this.router.navigate(['/','updatepersonal']);

  }

  updateProfessional()
  {
    this.router.navigate(['/','updateprofessional']);

  }
  
  dispUpdatedDetails(){


    this.updateservice.getUsersByEmail(this.loginuser).subscribe((data : Users)=>{

      this.updateduser=data;
      console.log(this.updateduser);

      this.name = this.updateduser.name;
      this.date = this.updateduser.date;
      this.Email = this.updateduser.email;
      this.gender = this.updateduser.gender;
      this.contactno = this.updateduser.contactno;
      this.hobies = this.updateduser.hobies;
      this.places = this.updateduser.places;
      this.favmovies = this.updateduser.favmovies;

      
     });

  }


}
