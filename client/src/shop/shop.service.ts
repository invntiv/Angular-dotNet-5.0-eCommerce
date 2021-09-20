import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  pageSize = 50
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IPagination>(this.baseUrl + 'products?pagesize=' + this.pageSize);
  }
}
