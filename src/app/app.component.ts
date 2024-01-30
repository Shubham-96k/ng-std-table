import { Component } from '@angular/core';
import { Istd } from './shared/module/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stdTable';
  stdsArray : Array<Istd> = [
    {
      fname : "jhon",
      lname : "doe",
      email : "jd@gmail.com",
      contact: 1234567890
    },
    {
      fname : "james",
      lname : "doe",
      email : "jamesd@gmail.com",
      contact: 9876543210
    },
    {
      fname : "jen",
      lname : "doe",
      email : "djen@gmail.com",
      contact: 8795462130
    },
  ]

  getStdobj(eve : Istd){
    console.log(eve);
    
    // this.stdsArray.unshift(eve);
    this.stdsArray.unshift(eve);
  }
}
