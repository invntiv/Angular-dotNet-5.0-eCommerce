import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // Angular Style conventions:
  // Class Properties
  title = 'eCommerce'; 
  products!: IProduct[];

  //Constructor
  constructor(private http: HttpClient) {}

  // Lifecycle Hooks
  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products?pageSize=50').subscribe(
      (response: IPagination) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }
}


