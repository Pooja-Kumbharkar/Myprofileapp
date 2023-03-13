import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export class LoginUser {


    username : string;

    constructor() {}
    
    setUser(user : string)
    {
        this.username = user;
    }
    getUser()
    {
        return this.username;
    }

}