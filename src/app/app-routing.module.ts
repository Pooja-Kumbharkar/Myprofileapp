import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { HobbyComponent } from './hobby/hobby.component';
import { LoginComponent } from './login/login.component';``
import { SignupComponent } from './signup/signup.component';
import { Calendarcomponent } from './calendar/calendar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { RemovefriendComponent } from './removefriend/removefriend.component';
import { UpdatepersonalComponent } from './updatepersonal/updatepersonal.component';
import { UpdateprofessionalComponent } from './updateprofessional/updateprofessional.component';

const routes: Routes = [
  {
    path : "", 
    redirectTo : "login",
    pathMatch : "full"
  },
  {
    path : "signup", 
    component : SignupComponent
  },

  {
    path : "updatepersonal",
    component : UpdatepersonalComponent
  },

  {
    path : "updateprofessional", 
    component : UpdateprofessionalComponent
  },

  {
    path : "login", 
    component : LoginComponent
  },
  {
    path : "home", 
    component : HomeComponent
  }, 
  {
    path : "profile", 
    component : ProfileComponent,
  },

  {
    path : "addfriend", 
    component : AddfriendComponent,
  },

  {
    path : "removefriend", 
    component : RemovefriendComponent,
  },

  {
    path : "friendlist", 
    component : FriendlistComponent,
  },
  {
    path : "friendsdetails", 
    component : HobbyComponent,
  },
  {
    path : "activities", 
    component : Calendarcomponent,
  },
  {
    path : "aboutus", 
    component : AboutusComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
