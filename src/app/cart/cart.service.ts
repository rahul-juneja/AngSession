import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../users/api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  url='http://localhost:5000/api/cart/'

  constructor(private http:HttpClient, private apiServ: ApiService) {
    apiServ.cartStats.next({cart:true})
    console.log(apiServ.cartStats.asObservable())
  }
  
  addtoCart(addUrl:any,data:any){
    // console.log(data);
    return this.http.post(this.url+addUrl,data)
  }
  showCart(id:any){
    const data = {
      userId: id
    }
    return this.http.post(this.url, data)
  }
  delProduct(addUrl:any, data:any){
    console.log(data)
    return this.http.post(this.url+addUrl, data)
  }
}
