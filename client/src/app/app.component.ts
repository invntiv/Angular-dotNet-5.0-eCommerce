import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // Angular Style conventions:
  // Class Properties
  title = 'eCommerce'; 

  //Constructor
  constructor() {}

  // Lifecycle Hooks
  ngOnInit(): void {
    
  }
}
