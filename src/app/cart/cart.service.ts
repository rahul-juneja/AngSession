import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url='http://localhost:5000/api/cart/'

  constructor(private http:HttpClient) { }
  
  addtoCart(addUrl:any,data:any){
    console.log(data);
    debugger
    return this.http.post(this.url+addUrl,data)
  }
  showCart(id:any){
    const data = {
      userId: id
    }
    return this.http.post(this.url, data)
  }
}
