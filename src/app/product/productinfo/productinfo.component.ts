import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartservService } from 'src/app/cart/cartserv.service';
import { ApiService } from 'src/app/users/api.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductInfoComponent implements OnInit {
  cartservApi: any;
  data:any = [];
  prodId = localStorage.getItem('prodId')
  cartDataList:any=[]
  productList: any=[]
  constructor(private formBuilder: FormBuilder, private productServ: ProductserviceService, private cartServ: CartservService) { }

  ngOnInit(): void {
    this.productServ.getProduct("men/"+this.prodId).subscribe((data:any)=>{
      this.data = data
      console.log(this.data)
    })
  }
  // mycart() {
  //   alert("Added to carts")
  // }

  addToCart(product:any){
    console.log(product)
    // localStorage.setItem("cartItems", JSON.stringify(product))
    this.cartServ.addToCart(product)
  }
}
