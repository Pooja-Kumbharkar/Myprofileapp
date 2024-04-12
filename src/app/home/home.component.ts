import { Component } from '@angular/core';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent{
 
  title = 'ProfileApp';
  opened;
  componentName = "hobby"
  
  constructor()
  {
    this.opened = false;
  }
  }
