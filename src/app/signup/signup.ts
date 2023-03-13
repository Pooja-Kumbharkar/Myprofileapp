import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

@Injectable({
  providedIn: 'root'
})

export class Signup {

    id : number;
    username : string ;
    password : string;

    constructor()
    {
        this.id = 0;
        this.username = " ";
        this.password =  " ";
    }

    
    

   
}


