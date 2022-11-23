import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:5000/api/products/'
  
  constructor(private http:HttpClient) { }
  
  
  getProduct(p_url:any){
    console.log(this.url+p_url);
    return this.http.get(this.url+p_url)
  }
  
}
