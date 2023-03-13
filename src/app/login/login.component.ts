import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup/signup.service';
import { Signup } from '../signup/signup';
import { ProfileComponent } from '../profile/profile.component';
import {LoginUser} from '../common/util/loginusers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string ;
  password: string;
  opened: boolean;
  users : any;
  flag: boolean;
  allowupdate : boolean;
  
  


  constructor(private router:Router, private profilecomponent : ProfileComponent, private usersignup : SignupService, private loginuser : LoginUser) { 
    this.opened = false;
    this.flag = false;
    this.allowupdate = false;
    this.username = "";
    this.password ="";
  

    
    
 
  }

  ngOnInit(): void {

    this.usersignup.getUsers().subscribe((data : Signup)=>{

      this.users=data;
  
     });
    
  }

  getVariable()
  {
    return this.allowupdate;
  }

  
  validate()
  {
      for(let user  of this.users){
        if(this.username == user.username && this.password == user.password)
        {
            this.flag = true;
      
            break;
        }
        else{
          this.flag = false;
        }

    
      }

      if(this.flag)
      this.router.navigate(['/','home']);

  else{
        alert("Invalid login. Please try again with correct credentails");
      }

      localStorage.setItem('username', this.username);
      this.loginuser.setUser(this.username);

      

      // if(this.username == this.profilecomponent.Email)
      // {
      //   this.allowupdate = true;
        
      // }
 
      // else if (this.username != this.profilecomponent.Email){
      //   this.allowupdate = false;
      // }
      // console.log(this.allowupdate);
   


      
  }
  
}
