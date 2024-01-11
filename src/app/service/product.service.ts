import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producti } from '../interface/producti';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url="assets/products.json";

  constructor( private http:HttpClient) { }
  getproducts():Observable<Producti[]>{
    return this.http.get<Producti[]>(this.url);
  }
  
}
