import { HttpClient } from '@angular/common/http';
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
  products: any[] | undefined;

  //Constructor
  constructor(private http: HttpClient) {}

  // Lifecycle Hooks
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: any) => {
      this.products = response.data;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}


