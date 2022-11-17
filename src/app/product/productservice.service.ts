import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getProduct(p_url:any){
    console.log(this.url+p_url);
    return this.http.get(this.url+p_url)
  }
}
