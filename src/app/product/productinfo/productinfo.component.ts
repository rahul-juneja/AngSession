import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ApiService } from 'src/app/users/api.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductInfoComponent implements OnInit {

  data: any = [];
  size:any;
  isSize:boolean = false;
  prodId = localStorage.getItem('prodId')
  productInfo = false

  constructor(private formBuilder: FormBuilder, private productServ: ProductService, private cartServ: CartService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.productServ.getProduct("product/"+this.prodId).subscribe((data: any) => {
      this.data = data.products[0]
      console.log(this.data)
    })
  }
  sizeClick(val:String){
    this.isSize = true
    console.log(val)
    this.size = val
    this.productInfo = true
  }
  addToCart(product: any) {
    this.data = {
      userId: localStorage.getItem('userId'),
      productId: localStorage.getItem('prodId'),
      size: this.size
    }
    if(this.productInfo){
      this.cartServ.addtoCart("add",this.data).subscribe(res=>{
        console.log(res)
        localStorage.setItem('isCart', "true")
        this.router.navigateByUrl('cart')
      })
      console.log(product)
    }
    else{
      alert("Invalid Size..!")
      window.location.reload()
    }

  }
}
