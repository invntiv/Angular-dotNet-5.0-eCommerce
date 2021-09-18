import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

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
  constructor(private http: HttpClient) {}

  // Lifecycle Hooks
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}


