import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from 'src/shared/models/brand';
import { IPagination } from 'src/shared/models/pagination';
import { IType } from 'src/shared/models/productType';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  pageSize = 50
  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();

    if(brandId){
      params = params.append('brandId', brandId.toString())
    }

    if(typeId){
      params = params.append('typeId', typeId.toString())
    }

    if(sort){
      params = params.append('append', sort)
    }

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response =>{
          return response.body;
        })
      )
  } 

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands')
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types')
  }
}
