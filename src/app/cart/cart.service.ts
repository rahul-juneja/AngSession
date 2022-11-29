import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartStats = new BehaviorSubject<any>([])
  url='http://localhost:5000/api/cart/'

  constructor(private http:HttpClient) { }
  
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
  cartHeader(){
    // this.cartStats.next({cart:true})
    return this.cartStats
  }
}
