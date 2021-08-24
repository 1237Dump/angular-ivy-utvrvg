import { Component, VERSION } from '@angular/core';
import { DataService } from './services/data.service' ;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Services demo ' + VERSION.major;

  constructor(private dataService: DataService){

  }

  
}
