import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartservService {
  cart = JSON.parse(localStorage.getItem('cartItems') || '{}')
  cartDataList:any=[] 
  productList=new BehaviorSubject<any>([]);
  constructor() {
    this.cartDataList.push(this.cart)
    console.log(this.cartDataList)
    this.productList.next(this.cart)
    console.log(this.productList.value)
  }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
   this.cartDataList.push(...product);
   this.productList.next(product)
  }
  
  addToCart(product:any){
    debugger
    let exists
    console.log("here")
    try{
      if(this.cartDataList){
        this.cartDataList.map((data:any)=>{
          if(data.id == product.id){
            console.log("Product Already Exists!!!")
            data.quantity += 1
            exists = true
          }
        })
      }
    }catch(err){
      console.log({message:err});
    }
    if(!exists){
      this.cartDataList.push(product);
      console.log(this.productList)
      // console.log(this.productList);
      // this.cartDataList.splice(0, 1)
      console.log(this.cartDataList)
      // this.cartDataList.map((val:any)=>{
      //   console.log(val);
      //   this.cartDataList.push(product)
      //   console.log(this.cartDataList)        
      // })
      this.productList.next(this.cartDataList);
      console.log(this.productList)
      localStorage.setItem('cartItems', JSON.stringify(this.productList.value))
      console.log(this.productList);
      this.getTotalAmount();
      console.log(product.id);
    }
  }

  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
      console.log(a.quantity)
      grandTotal+=a.total*a.quantity;
    })
    return grandTotal
  }


  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartDataList.splice(index,1);
      }
    })
    this.productList.next(this.cartDataList)
  }

  
  removeAllCart(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList);
  }
}