import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from 'rxjs/operators';
import { Users } from "../updatepersonal/users";


export interface User{
    username:any;
    password:any;
}

@Injectable({
    providedIn:'root'
})

export class UserDetails{



    constructor(private http:HttpClient)
    {  
        

    }

    getUser(){
        return this.http.get<any>("../../assets/login.json")
        .toPromise()
        .then(res=><User[]>res.data)
        .then(data=>{return data;});
        

    }
    

}